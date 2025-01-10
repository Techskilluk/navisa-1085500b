import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const ProfilePicture = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-4 mb-8">
      <Avatar className="h-16 w-16">
        <AvatarImage src={user?.user_metadata?.avatar_url} />
        <AvatarFallback>
          <User className="h-8 w-8" />
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-semibold">Profile Picture</h3>
        <p className="text-sm text-muted-foreground">
          Update your profile picture
        </p>
      </div>
      <Button variant="outline" className="ml-auto">
        Change
      </Button>
    </div>
  );
};

export default ProfilePicture;