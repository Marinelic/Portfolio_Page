import {
    Facebook,
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl  font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-cyan-600/10">
                                    <Mail className="h-6 w-6 text-yellow-400" /> {" "}
                                </div>

                                <div>
                                    <h4 className="font-medium">Email</h4>

                                    <a href="mailto:hello@gmail.com" className="text-muted-foreground hover:text-yellow-400 transition-colors">hello@gmail.com</a>
                                </div>
                            </div>


                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-cyan-600/10">
                                    <Phone className="h-6 w-6 text-yellow-400" /> {" "}
                                </div>

                                <div>
                                    <h4 className="font-medium">Phone</h4>

                                    <a href="tel:1234567890" className="text-muted-foreground hover:text-yellow-400 transition-colors"> +1 (123) 456-7890</a>
                                </div>
                            </div>


                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-cyan-600/10">
                                    <MapPin className="h-6 w-6 text-yellow-400" /> {" "}
                                </div>

                                <div>
                                    <h4 className="font-medium">Location</h4>

                                    <a className="text-muted-foreground hover:text-yellow-400 transition-colors"> Vancouver, BC, Canada</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>

                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>

                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>

                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>

                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3>Send a Message</h3>

                        <form>
                            <div>
                                <label 
                                       htmlFor="name"
                                       className="block text-sm font-medium mb-2"     
                                    >
                                    {" "} Your Name
                                </label>

                                <input 
                                       type="text"
                                       id="name"
                                       name="name"
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-amber-400/40"
                                       placeholder="Marinela Rajković" />
                            </div>


                            <div>
                                <label 
                                     htmlFor="email"
                                     className="block text-sm font-medium mb-2">
                                    {" "} Your Email
                                </label>

                                <input 
                                       type="email"
                                       id="email"
                                       name="email"
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-amber-400/40"
                                       placeholder="John@gmail.com" />
                            </div>


                            <div>
                                <label 
                                       htmlFor="message"
                                       className="block text-sm font-medium mb-2">
                                    {" "} Your Message
                                </label>

                                <textarea 
                                       id="message"
                                       name="message"
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-amber-400/40 resize-none"
                                       placeholder="Hello, I'd like to talk about..." />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}; 