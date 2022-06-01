import Link from 'next/link'

export const NavBarMenuItem = (props: any) => {
  return (
    <Link href={props.href}>
      <a className="lg:inline-flex lg:w-auto w-full px-4 py-3 font-bold items-center justify-center hover:text-pink-400 ">
        {props.tag}
      </a>
    </Link>
  )
}
