
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Car Enthusiast Meet"
              className="rounded-lg shadow-lg h-auto max-h-[400px] object-cover w-full"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About One Off Autos</h2>
            <p className="text-lg text-gray-700 mb-4">
              One Off Autos was created by enthusiasts, for enthusiasts. We provide a dedicated marketplace for buyers and sellers of used modified cars for sale, celebrating the craftsmanship, passion, and uniqueness of automotive builds.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Unlike general car marketplaces, we understand modifications, appreciate their value, and give builders a platform to showcase their work to an audience that gets it.
            </p>

            <Link to="/about">
              <Button variant="outline" className="border-oneoffautos-blue text-oneoffautos-blue hover:bg-oneoffautos-blue hover:text-white">
                Read Our Full Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
