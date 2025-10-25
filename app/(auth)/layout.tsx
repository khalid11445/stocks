import Image from "next/image"
import Link from "next/link"

const layout = ({children}: {children: React.ReactNode})=>{
    return (
    <main className="auth-layout">
        <section className="auth-left-section scrollbar-hide-default">
            <Link href="/" className="auth-logo">
                <Image src="/assets/icons/logo.svg" alt="logo" width={140} height={32} className="h-8 w-auto" />
            </Link>

            <div className="pb-6 lg:pb-8 flex-1">{children}</div>
        </section>

        <section className="auth-right-section ">
            <div className="z-10 relative lg:mt-4 lg:mb-16">
                <blockquote className="text-white italic text-lg lg:text-2xl font-semibold relative z-10">
                    &quot;The best way to predict the future is to invent it.&quot;
                </blockquote>
                <span className="absolute -bottom-20 -left-1 text-[150px] lg:text-[200px] text-white/10 font-bold leading-none select-none pointer-events-none z-0">
                    Trading
                </span>

                <div className="flex items-center mt-4 lg:mt-6 relative z-10">
                    <div>
                        <cite className="auth-testimonial-author">Khalid .B</cite>
                        <p className="max-md:text-xs text-gray-500">Retail Investor</p>
                        <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Link href="#" key={star} className="mt-1">
                                <Image
                                    src="/assets/icons/star.svg" width={20} height={20} className="w-5 h-5" alt={"star"}/>  
                            </Link>))}
                    </div>
                    </div>

                    
                </div>
            </div>

            <div className="flex-1 relative">
                <Image src="/assets/images/dashboard.png" alt="dashboard" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
        </section>

    </main>
)
}
export default layout