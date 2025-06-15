import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
  } from "lucide-react";
 /*  import { cn } from "@/lib/utils";
  import { useToast } from "@/hooks/use-toast";
  import { useState } from "react"; */

export const ContactSection  = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="constainer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    get In <span className="text-yellow-400"> Touch</span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.  
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap12">
                    <div className="space-y-8">
                        <h3 className="text-2xl  font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-cyan-600/10">
                                    <Mail className="h-6 w-6 text-yellow-400" /> {" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 