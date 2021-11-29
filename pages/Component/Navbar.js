import React from 'react'
import { Fragment } from 'react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'




import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    ChevronDownIcon
} from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'

const Navbar = () => {

    return (
        <div>
            <nav className="bg-white flex justify-between max-w-8xl sm:px-6 tablet:px-8">
                <div className="flex-shrink-0">
                    <img
                        className="flex justify-start h-20 w-auto"
                        src="/Logo.png"
                        alt="Workflow"
                    />
                </div>
                <div className="w-96 ">
                    <Input type="text" placeholder='&#128269;Search'  className="hidden tablet:block bg-gray-200 h-10  my-5 ml-20 w-full" />

                </div>
                <div className="flex items-center">
                    <span className="hidden tablet:block">
                        <Button className="bg-skin-lightBlue hover:bg-skin-hoverBlue text-skin-darkBlue p-2 px-3 rounded-tablet mx-4">Sell</Button>
                    </span>
                    <span className="hidden tablet:block">
                        <Button className="bg-skin-lightGreen hover:bg-skin-hoverGreen text-skin-darkGreen p-2 rounded-tablet mx-4">Donate</Button>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="hidden tablet:block h-5 w-5 text-skin-darkBlue mx-4 scale-150" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>

                    {/*User Profile button*/}
                    <Menu>
                        <MenuButton
                            py={2}
                            transition='all 0.2s'
                            _expanded={{ bg: 'blue.400' }}
                            _focus={{ boxShadow: 'outline' }} rightIcon={<ChevronDownIcon />}>
                            <div className="w-[35px] hidden tablet:block ml-4 ">

                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

                            </div>
                        </MenuButton>
                        <MenuList className=" bg-white rounded-lg p-2 w-28 shadow-lg" >
                            <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"><span className="text-skin-darkBlue">Edit</span></MenuItem>
                            <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"><span className="text-skin-darkBlue">Favourite</span></MenuItem>
                            <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"><span className="text-skin-darkBlue">Message</span></MenuItem>
                            <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"><span className="text-skin-darkBlue">Log-out</span></MenuItem>
                        </MenuList>
                    </Menu>
                    {/*Donate Button*/}
                    <div className="block tablet:hidden">
                        <Menu >
                            <MenuButton
                                py={2}
                                transition='all 0.2s'
                                _expanded={{ bg: 'blue.400' }}
                                _focus={{ boxShadow: 'outline' }} rightIcon={<ChevronDownIcon />}>
                                <div className="w-[35px] ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-skin-darkGreen hover:" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                </div>
                            </MenuButton>
                            <MenuList className=" bg-white rounded-lg p-2 w-28 shadow-lg" >
                                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold"><span className="text-skin-darkBlue">Sell</span></MenuItem>
                                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold"><span className="text-skin-darkBlue">Donate</span></MenuItem>
                                <MenuItem className="p-1 hover:bg-skin-lightGreen transition-all rounded font-semibold"><span className="text-skin-darkBlue">Donate to NGO</span></MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    {/*Hamburger Menu*/}
                    <div className="block tablet:hidden">
                        <Menu >
                            <MenuButton
                                py={2}
                                transition='all 0.2s'
                                _expanded={{ bg: 'blue.400' }}
                                _focus={{ boxShadow: 'outline' }} rightIcon={<ChevronDownIcon />}>
                                <div className="w-[35px] ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </MenuButton>
                            <MenuList className=" bg-white rounded-lg p-2 w-28 shadow-lg" >
                                <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"><span className="text-skin-darkBlue">Profile</span></MenuItem>
                                <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"><span className="text-skin-darkBlue">Favourite</span></MenuItem>
                                <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"><span className="text-skin-darkBlue">Message</span></MenuItem>
                                <MenuItem className="p-1 hover:bg-skin-lightBlue transition-all rounded font-semibold"><span className="text-skin-darkBlue">Log-out</span></MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </div>

            </nav>
            <div className="w-10/12 ml-auto mr-auto">
                <Input type="text" placeholder='Search' className="block tablet:hidden bg-gray-200 h-10 w-full" />
            </div>
        </div>
    )
}

export default Navbar
