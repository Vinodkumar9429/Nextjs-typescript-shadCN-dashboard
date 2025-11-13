import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  Plus,
  Projector,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
              className="flex justify-start items-center"
               href={"/"}>
                <Avatar>
              <AvatarImage
              className="w-6 h-6 mt-1 rounded-full"
               src="https://github.com/shadcn.png" />
              <AvatarFallback>V</AvatarFallback>
            </Avatar>
              Vinod</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {
                    item.title==="Inbox" && (
                      <SidebarMenuBadge>
                        {12+21}
                      </SidebarMenuBadge>
                    )
                  }
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={"/"} className="flex items-center gap-2">
                      <Projector />
                      <span className="transition-all duration-300 group-data-[collapsible=icon]:hidden">
                        See All Projects
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                  <Link href={"/"} className="flex items-center gap-2">
                    <Plus />
                    <span className="transition-all duration-300 group-data-[collapsible=icon]:hidden">
                      Add Projects
                    </span>
                  </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarContent>
        </SidebarGroup>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="group flex items-center justify-between w-full">
                Collapsible         
               <ChevronUp className="transition-transform duration-300 group-data-[state=open]:rotate-180" />

              </CollapsibleTrigger>
            </SidebarGroupLabel>
              <SidebarContent>
            <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href={"/"}>
                          <Projector />
                          <span className="transition-all duration-300 group-data-[collapsible=icon]:hidden">
                          Add Projects
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href={"/"}>
                          <Plus />
                          <span className="group-data-[collapsible=icon]:hidden">
                          Add Projects
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
            </CollapsibleContent>
              </SidebarContent>
          </SidebarGroup>
        </Collapsible>

        {/*Nested */}
                <SidebarGroup>
          <SidebarGroupLabel>
            Nested Items
            </SidebarGroupLabel>
          <SidebarContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <Collapsible className="group">
                <SidebarMenuItem >
                  <SidebarMenuButton asChild>
                    <Link href={"/"} className="flex items-center between w-full">
                    <div className="flex items-center gap-2">
                      <Projector />
                      <span className="transition-all duration-300 group-data-[collapsible=icon]:hidden w-full">
                        <CollapsibleTrigger className="group flex items-center justify-between w-full">
                          <span className="transition-all duration-300 group-data-[collapsible=icon]:hidden flex w-full justify-between">
                          See All Projects
                          </span>
                          <ChevronUp className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </CollapsibleTrigger>
                      </span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
          <CollapsibleContent>
                  <SidebarMenuSub>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                  <Link href={"/"} className="flex items-center gap-2">
                    <Plus />
                    <span className="transition-all duration-300 group-data-[collapsible=icon]:hidden">
                      Add Projects
                    </span>
                  </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuSub>
                                  <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                  <Link href={"/"} className="flex items-center gap-2">
                    <Plus />
                    <span className="transition-all duration-300 group-data-[collapsible=icon]:hidden">
                      More Projects
                    </span>
                  </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                </SidebarMenuSub>
                </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>

              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarContent>
        </SidebarGroup>
        
        
        
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Vinod <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>SignOut</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
