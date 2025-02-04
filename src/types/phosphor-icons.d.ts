declare module '@phosphor-icons/react' {
  import { ComponentType, SVGProps } from 'react'

  interface IconProps extends SVGProps<SVGElement> {
    size?: string | number
    color?: string
    weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  }

  type IconComponent = ComponentType<IconProps>

  export const Sun: IconComponent
  export const Shield: IconComponent
  export const Headset: IconComponent
  export const LightbulbFilament: IconComponent
  export const EnvelopeSimple: IconComponent
  export const Phone: IconComponent
  export const MapPin: IconComponent
  // Add other icons as needed
}
