import { DropDownItem } from './DropDownItem'
import { NavBarMenuItem } from './NavBarMenuItem'

export const NavMenu = (props: any) => {
  return (
    <div
      className={`${
        props.active ? '' : 'hidden'
      }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
    >
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        <NavBarMenuItem href={'/services'} tag={'Услуги'} />
        <NavBarMenuItem href={'/'} tag={'Новости'} />
        <NavBarMenuItem href={'/'} tag={'Врачи'} />
        <NavBarMenuItem href={'/'} tag={'Цены'} />
        <NavBarMenuItem href={'/'} tag={'Акции'} />
        <NavBarMenuItem href={'/'} tag={'О нас'} />
      </div>
    </div>
  )
}
