
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function MaintenancePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src="/maintenance-cover.png"
                    alt="Under Construction"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 lg:p-12 max-w-4xl w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="space-y-6 mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
                        Onder constructie
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 font-light tracking-wide">
                        We zijn even bezig
                    </p>
                    <p className="text-lg text-neutral-400 italic">
                        Achter de schermen...
                    </p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-3xl border-t border-white/10 pt-12">
                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <Phone className="w-5 h-5 text-white/80" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-400 mb-1">Telefoon</p>
                            <a href="tel:+320470101212" className="text-lg font-medium hover:text-white transition-colors">
                                +32 0470 10 12 12
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <Mail className="w-5 h-5 text-white/80" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-400 mb-1">Email</p>
                            <a href="mailto:info@essystems.be" className="text-lg font-medium hover:text-white transition-colors">
                                info@essystems.be
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <MapPin className="w-5 h-5 text-white/80" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-400 mb-1">Adres</p>
                            <p className="text-lg font-medium">
                                Brancardiershof 13, <br /> Heusden-Zolder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
