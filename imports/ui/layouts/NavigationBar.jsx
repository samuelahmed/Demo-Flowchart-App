import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../components/ui/menubar";

export const NavigationBar = () => {
  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-row justify-start space-x-0.5">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Dashboard</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Dashboard</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Create</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Account</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Projects</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Jobs</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Materials</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Properties</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Workflows</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Dropbox</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>External Uploads</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Community</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Bank</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Accounts</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Shared with me</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Shared Publicly</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Help</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Documentation</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Contact Support</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Compute Load: Low</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden space-y-0.5">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Dashboard</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Dashboard</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Create</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Account</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Projects</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Jobs</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Materials</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Properties</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Workflows</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Dropbox</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>External Uploads</MenubarItem>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Community</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Bank</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Accounts</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Shared with me</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Shared Publicly</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Workflows</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Help</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Projects</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Jobs</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Materials</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Properties</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Workflows</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Dropbox</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>External Uploads</MenubarItem>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </>
  );
};
