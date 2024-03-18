import Link from "next/link";

import { Button } from "@/components/Other/UI/button";

const Contact = () => {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
          Ready to turn your ideas into reality? I'm here to help.
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
