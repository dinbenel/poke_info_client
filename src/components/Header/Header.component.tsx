import { NavLink } from "@solidjs/router";
import { routeNames } from "../../constants/routeNames";
import { FaSolidCircleUser } from "solid-icons/fa";
import PokeBallSvg from "../Svg/PokeBallSvg.component";
import { HiSolidBarsArrowDown } from "solid-icons/hi";

const Header = () => {
  return (
    <header class="bg-foreground p-4">
      <nav class="text-background text-xl capitalize flex items-center justify-between container">
        <section class="flex items-center justify-center">
          <div class="w-14 h-14">
            <PokeBallSvg />
          </div>
          <span>poke-info</span>
        </section>
        <section class="flex items-center justify-center gap-4 me-20">
          <NavLink href={routeNames.home}>
            {routeNames.home.replace("/", "home")}
          </NavLink>
          <NavLink href={routeNames.login}>
            {routeNames.login.replace("/", "").trim()}
          </NavLink>
          <NavLink href={routeNames.register}>
            {routeNames.register.replace("/", "").trim()}
          </NavLink>
        </section>
        <section class="bg-background p-1 rounded-full flex items-center justify-center gap-2">
          <FaSolidCircleUser size={28} class="text-foreground" />
          <HiSolidBarsArrowDown size={25} class="text-foreground" />
        </section>
      </nav>
    </header>
  );
};

export default Header;
