import { Pencil } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Account() {
  return (
    <div className="flex flex-col gap-6 p-8 w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="text-sm text-muted-foreground">
          Home &gt; <span className="text-foreground">Profile</span>
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6 border-b">
          <h3 className="text-lg font-bold leading-none tracking-tight">Profile</h3>
        </div>
        <div className="p-6 space-y-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                <img src="" alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Partha Debnath</h2>
                <p className="text-sm text-muted-foreground mt-1 flex items-center">
                  Team Manager <span className="mx-2 text-border">|</span> Arizona, United States
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-muted-foreground">
                <FaFacebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-muted-foreground">
                <FaTwitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-muted-foreground">
                <FaLinkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 text-muted-foreground">
                <FaInstagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="ml-2 rounded-full px-6 font-medium">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
          </div>

          {/* Personal Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div>
                <p className="text-sm text-muted-foreground mb-1.5">First Name</p>
                <p className="font-semibold">Partha</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1.5">Last Name</p>
                <p className="font-semibold">Debnath</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1.5">Email address</p>
                <p className="font-semibold">randomuser@pimjo.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1.5">Phone</p>
                <p className="font-semibold">+09 363 398 46</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground mb-1.5">Bio</p>
                <p className="font-semibold">Team Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm mt-4">
        <div className="flex items-center justify-between p-6">
          <h3 className="text-lg font-bold leading-none tracking-tight">Address</h3>
          <Button variant="outline" className="rounded-full px-6 font-medium">
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
        <div className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div>
              <p className="text-sm text-muted-foreground mb-1.5">Country</p>
              <p className="font-semibold">United States.</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1.5">City/State</p>
              <p className="font-semibold">Phoenix, Arizona, United States.</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1.5">Postal Code</p>
              <p className="font-semibold">ERT 2489</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1.5">TAX ID</p>
              <p className="font-semibold">AS4568384</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
