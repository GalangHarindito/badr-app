import Link from "next/link";
import Image from "next/image";

interface Menu {
  menu: any[];
}

const SideBar = ({ menu }: Menu) => {
  return (
    <div className='bg-sideBar h-full menuBar py-5 sidebarMenu'>
      <ul>
        {menu &&
          menu.map((item, index) => {
            return (
              <li className='text-white flex gap-2 items-center p-4 bg-activeSidebar' key={index}>
                <Image
                  src={item.icon}
                  width={15}
                  height={15}
                  alt='management'
                />
                <Link className='font-medium' href={item.url}>
                  {item.titleMenu}
                </Link>
              </li>
            );
          })}
      </ul>
      <div className='flex items-start gap-4 p-4'>
         <Image
          src='assets/ic-mail.svg'
          width={15}
          height={15}
          alt='support'
          className='pt-1'
        />
        <div>
          <div className='font-medium text-grayScale4'>Support</div>
          <div className='font-medium text-white'>CS@bosnet.com</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
