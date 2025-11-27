import React from 'react'

const FooterSection = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-16 text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl text-white mb-4 tracking-tighter font-semibold">Aunty Adelaja</h3>
            <p className="text-gray-500 max-w-lg font-light text-lg">
              Where heritage meets haute couture. Bespoke silhouettes crafted to celebrate your story and instill confidence by every stitch.
            </p>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-lg mb-2">Location</h4>
            <address className="text-gray-500 not-italic leading-loose font-[1.2rem]">
              Lagos<br />
              Lagos state, Nigeria<br />
              101111
            </address>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-lg mb-2">Legal</h4>
            <ul className="space-y-4 text-gray-500 font-[1.2rem] text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 text-center text-gray-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Aunty Adelaja. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterSection