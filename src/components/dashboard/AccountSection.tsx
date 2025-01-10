import ProfilePicture from "./profile/ProfilePicture";
import ProfileForm from "./profile/ProfileForm";

const AccountSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">My Account</h2>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and profile information
        </p>
      </div>

      <div className="p-6 bg-card rounded-lg border border-border/10">
        <ProfilePicture />
        <ProfileForm />
      </div>
    </div>
  );
};

export default AccountSection;