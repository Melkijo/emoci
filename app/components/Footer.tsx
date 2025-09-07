import Link from "next/link";

export default function Footer() {
    return(
        <footer id="footer" className="py-8 bg-primary/5">
            <div className="max-w-7xl mx-auto  ">
            <div className="flex justify-between items-center mx-4 bg-primary p-4 sm:px-6 lg:px-8  rounded-lg">
            <p className="text-sm text-white">© {new Date().getFullYear()} Emoci. All rights reserved.</p>
                <Link href="/privacy-policy" className="text-sm text-white hover:text-white/80 transition-colors duration-200">Privacy Policy</Link>
               

            </div>
            </div>
            
        </footer>
    )
}