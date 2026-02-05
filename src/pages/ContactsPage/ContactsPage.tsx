import { HeroBlock } from "./components/HeroBlock";
import { ContactInfoBlock } from "./components/ContactInfoBlock";
import { SocialBlock } from "./components/SocialBlock";
import { FormBlock } from "./components/FormBlock";
import { AdvantagesBlock } from "./components/AdvantagesBlock";
import { MapBlock } from "./components/MapBlock";

export function ContactsPage() {
  return (
    <>
      <HeroBlock />
      <ContactInfoBlock />
      <SocialBlock />
      <FormBlock />
      <AdvantagesBlock />
      <MapBlock />
    </>
  );
}
