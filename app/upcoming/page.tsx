import Navbar from "@/components/navbar";
import { optionsForMenu } from '@/app/menu-options';

export default function Upcoming() {
    return (
        <Navbar menuOptions={optionsForMenu} />
    )
}