import Link from 'next/link'

export const DropDownItem = (props: any) => {
  return (
    <div className="flex flex-col">
      <Link href={props.href}>
        <button className="lg:inline-flex lg:w-auto w-full px-4 py-3 font-bold items-center justify-center hover:text-pink-400 ">
          {props.tag}
        </button>
      </Link>
      <div
        id="dropdown"
        className="hidden bg-gray-100 flex flex-col rounded mt-1 p-2 text-sm w-32"
      >
        <a href="" className="px-2 py-1 hover:bg-blue-200 rounded">
          Posts
        </a>
        <a href="" className="px-2 py-1 hover:bg-blue-200">
          Blog
        </a>
      </div>
    </div>
  )
}

{
  /* <Link href={props.href}>
    <a className="lg:inline-flex lg:w-auto w-full px-4 py-3 font-bold items-center justify-center hover:text-pink-400 ">
      {props.tag}
    </a>
  </Link> 

      <div className="">
      <button>Menu</button>
      <div className="bg-gray-200 flex flex-col rounded mt-1 p-2 text-sm w-32">
        <a href="" className="px-2 py-1 hover:bg-blue-200">
          Posts
        </a>
        <a href="" className="px-2 py-1 hover:bg-blue-200">
          Blog
        </a>
      </div>
    </div>

*/
}
