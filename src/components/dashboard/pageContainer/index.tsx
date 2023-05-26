import type { ReactNode } from "react";

interface MainContainer {
  children?: ReactNode;
  titlePage?: String;
}

const PageContainer = ({ children, titlePage }: MainContainer) => {
  return (
    <div className='mainPage m-6'>
      <div>
        <div className='text-2xl font-bold flex justify-center mt-3 mb-5'>
          {titlePage}
        </div>
        <div className='px-6 py-4 bg-white rounded-lg'>{children}</div>
      </div>

      <div className='text-sm font-normal flex justify-center mt-3 items-end'>
        ©2021 Managed by PT. Bosnet Distribution Indonesia
      </div>
    </div>
  );
};

export default PageContainer;
