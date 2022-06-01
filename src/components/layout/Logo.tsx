import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold uppercase tracking-wide text-pink-400">
              МEDЮНИОН
            </span>
            <span className="flex flex-wrap text-xs">
              сеть медицинских центров
            </span>
          </div>
        </a>
      </Link>
    </>
  )
}
