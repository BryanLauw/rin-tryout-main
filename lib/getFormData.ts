import { FormEvent } from "react"

export function getFormData(e: FormEvent<HTMLFormElement>) {
  const formData = new FormData(e.currentTarget)
  const data: { [key: string]: string } = {}

  formData.forEach((value, key) => {
    data[key] = value as string
  })
  return data
}
