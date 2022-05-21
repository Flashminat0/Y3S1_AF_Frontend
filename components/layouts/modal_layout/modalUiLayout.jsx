import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <AnimatePresence>
      {open && (
        <Dialog
          static
          as={motion.div}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div class="fixed inset-0 bg-black/30" />

          <Dialog.Panel>
            <Dialog.Title>Deactivate account</Dialog.Title>

            {/* ... */}
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
    </>
  )
}
