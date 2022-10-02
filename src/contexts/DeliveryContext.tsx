import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

interface FormType {
  address: {
    street: string
    number: number
    neighborhood: string
    uf: string
    city: string
  }
  paymentMethod: 'credit' | 'debit' | 'cash'
}

interface DeliveryContextType {
  address: {
    street: string
    number: number
    neighborhood: string
    uf: string
    city: string
  }
  paymentMethod: 'credit' | 'debit' | 'cash'
  changeFormData: (form: FormType) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext({} as DeliveryContextType)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [formData, setFormData] = useState({} as FormType)

  const changeFormData = useCallback((form: FormType) => {
    setFormData(form)
  }, [])

  return (
    <DeliveryContext.Provider
      value={{
        address: formData.address,
        paymentMethod: formData.paymentMethod,
        changeFormData,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
