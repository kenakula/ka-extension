import { Dialog, Popover } from "radix-ui"
import { ReactElement, useEffect, useRef, useState } from "react"
import { SlPlus } from "react-icons/sl"

import { CreateForm } from "~components/quick-links/components/create-form"
import { LinkItem } from "~components/quick-links/components/link-item"
import { IQuickLink } from "~shared/interfaces"

import { LinkItemStyled, LinksList, PopoverTrigger } from "./styles"

const DEFAULT_LINKS: IQuickLink[] = [
  {
    url: "https://yandex.ru/maps"
  },
  {
    url: "https://google.com"
  },
  {
    url: "https://youtube.com"
  }
]

const STORAGE_LINKS_KEY = "kp_quick_links"

export const QuickLinks = (): ReactElement => {
  const linksSet = useRef<boolean>(false)

  const [links, setLinks] = useState<IQuickLink[]>(DEFAULT_LINKS)
  const [linkToEdit, setLinkToEdit] = useState<IQuickLink | null>(null)

  const handleCloseEditModal = (state: boolean): void => {
    !state && setLinkToEdit(null)
  }

  const handleDelete = (url: string): void => {
    const filteredLinks = links.filter((link) => link.url !== url)
    setLinks(filteredLinks)
  }

  const handleEditLinkClick = (link: IQuickLink) => {
    setLinkToEdit(link)
  }

  const handleAdd = (link: IQuickLink): void => {
    setLinks([...links, link])
  }

  const handleEdit = (link: IQuickLink): void => {
    const linksCopy = links.slice()
    const foundLink = linksCopy.find((item) => item.url === linkToEdit.url)

    if (foundLink) {
      Object.assign(foundLink, link)
      setLinks(linksCopy)
    }

    setLinkToEdit(null)
  }

  useEffect(() => {
    const storedLinks =
      localStorage.getItem(STORAGE_LINKS_KEY) ?? JSON.stringify(DEFAULT_LINKS)
    setLinks(JSON.parse(storedLinks))
    linksSet.current = true
  }, [])

  useEffect(() => {
    if (!linksSet.current) return

    localStorage.setItem(STORAGE_LINKS_KEY, JSON.stringify(links))
  }, [links])

  return (
    <>
      <LinksList>
        {links?.map((link) => (
          <LinkItem
            link={link}
            handleDeleteLink={handleDelete}
            handleEditLink={handleEditLinkClick}
          />
        ))}
        <LinkItemStyled>
          <Popover.Root>
            <PopoverTrigger>
              <SlPlus size={32} />
            </PopoverTrigger>
            <Popover.Portal>
              <Popover.Content>
                <CreateForm handleSubmit={handleAdd} />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </LinkItemStyled>
      </LinksList>
      <Dialog.Root open={!!linkToEdit} onOpenChange={handleCloseEditModal}>
        <Dialog.Portal>
          <Dialog.Content>
            <Dialog.Title>Edit link</Dialog.Title>
            <CreateForm handleSubmit={handleEdit} defaultValues={linkToEdit} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
