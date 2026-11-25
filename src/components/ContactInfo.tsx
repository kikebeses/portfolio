import type { ComponentType } from 'react'

interface ContactInfoProps {
  icon: ComponentType<{ size?: number }>
  label: string
  /** Address shown under the label, e.g. the email or the profile URL. */
  detail: string
}

/** Icon, label and address of a contact panel row. */
function ContactInfo({ icon: Icon, label, detail }: ContactInfoProps) {
  return (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-btn-bg text-btn-fg">
        <Icon size={16} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-medium">{label}</span>
        <span className="truncate font-serif text-sm text-muted-2 italic">{detail}</span>
      </span>
    </>
  )
}

export default ContactInfo
