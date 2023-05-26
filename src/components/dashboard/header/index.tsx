import { useEffect, useState } from "react";
import { initialUser } from "@helpers/general";

const HeaderDashboard = () => {
  const [userLetter, setUserLetter] = useState<String>();
  const user = 'Cooper Rooser';

  useEffect(() => {
    setUserLetter(initialUser(user));
  }, []);

  return (
    <div className='bg-white px-10 py-3 flex flex-row justify-between items-center'>
      <div className='flex items-center gap-1'>
      <div className='border p-1 bg-orange rounded-full' />
        <div className='text-md font-bold'>My Brand</div>
      </div>

      <div className='flex items-center gap-2'>
        {userLetter && (
          <div className='border p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-full'>
            {userLetter}
          </div>
        )}
        <div className='text-sm font-normal'>{user}</div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
