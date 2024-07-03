import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import InfoChange from "../components/landing/profile/InfoChange";
import PasswordChange from "../components/landing/profile/PasswordChange";
import { LockIcon, UserIcon } from "lucide-react";

const Profile = () => {
  return (
    <>
      <Tabs
        defaultValue="account"
        className="flex items-start gap-5 max-md:flex-col"
      >
        <TabsList className="w-[280px] flex md:flex-col h-auto p-4 max-md:w-full max-md:p-2 max-[470px]:flex-col">
          <TabsTrigger className="w-full py-4 max-md:p-2" value="account">
            <div className="flex items-center w-full gap-2 justify-start max-md:justify-center max-[470px]:justify-start">
              <UserIcon />
              <span>{"Foydalanuvchi ma'lumotlari"}</span>
            </div>
          </TabsTrigger>
          <TabsTrigger className="w-full py-4 max-md:p-2" value="password">
            <div className="flex items-center w-full gap-2 justify-start max-md:justify-center max-[470px]:justify-start">
              <LockIcon className="w-5 h-5 mb-[2px] ml-[3px]" />
              <span>{"Parolni o'zgartirish"}</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="account"
          className="w-full max-w-[800px] mx-auto p-0"
        >
          <InfoChange />
        </TabsContent>
        <TabsContent value="password" className="w-full max-w-[800px] mx-auto">
          <PasswordChange />
        </TabsContent>
      </Tabs>
    </>
  );
};
export default Profile;
