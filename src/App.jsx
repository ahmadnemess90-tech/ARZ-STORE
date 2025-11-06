import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Phone, MessageSquare } from 'lucide-react'

export default function App() {
  const [lang, setLang] = useState('ar')
  const t = (k) => (lang === 'ar' ? ar[k] : en[k])

  return (
    <div className="min-h-screen text-white">
      <div className="bg-arz-slate text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <p className="truncate">{t('topBanner')}</p>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
            <a href="#contact" className="underline underline-offset-4 hover:opacity-80">{t('contactUs')}</a>
          </div>
        </div>
      </div>

      <header className="bg-arz-slate sticky top-0 z-40 shadow-sm border-b border-arz-sky/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/arz-logo.png" alt="Arz Store Logo" className="w-14 h-14 object-contain" loading="lazy" />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-arz-sky">Arz Store</h1>
              <p className="text-xs text-gray-400">{t('tagline')}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-gray-200">
            <a className="hover:text-arz-sky" href="#products">{t('navProducts')}</a>
            <a className="hover:text-arz-sky" href="#categories">{t('navCategories')}</a>
            <a className="hover:text-arz-sky" href="#whyus">{t('navWhyUs')}</a>
            <a className="hover:text-arz-sky" href="#faq">{t('navFAQ')}</a>
          </nav>
          <a href={t('whatsappLink')} className="inline-flex items-center gap-2 bg-arz-sky text-white px-4 py-2 rounded-2xl hover:opacity-90 transition">
            <MessageSquare className="w-5 h-5" />
            <span>{t('whatsappCTA')}</span>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-arz-slate to-arz-navy" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-arz-sky">
              {t('heroTitle')} <span className="text-white">Arz Store</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">{t('heroSubtitle')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="px-5 py-3 rounded-2xl bg-arz-sky text-white hover:opacity-90 transition inline-flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />{t('shopNow')}
              </a>
              <a href={t('whatsappLink')} className="px-5 py-3 rounded-2xl bg-transparent border border-arz-sky text-arz-sky hover:bg-arz-sky/10 transition inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />{t('orderOnWhatsApp')}
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-arz-sky/20">
              <img alt="Featured electronics" src="https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const ar = {
  topBanner: 'توصيل سريع داخل لبنان + دفع عند الإستلام',
  contactUs: 'تواصل معنا',
  tagline: 'إلكترونيات أصلية بأسعار منافسة',
  navProducts: 'المنتجات',
  navCategories: 'التصنيفات',
  navWhyUs: 'لماذا نحن',
  navFAQ: 'الأسئلة الشائعة',
  whatsappCTA: 'اطلب عبر واتساب',
  whatsappLink: 'https://wa.me/96170216062',
  heroTitle: 'أفضل عروض الإلكترونيات من',
  heroSubtitle: 'موبايلات، سماعات، إكسسوارات، باور بانك وأكثر — أسعار مميزة وتوصيل سريع لكل المناطق.',
  shopNow: 'تسوق الآن',
  orderOnWhatsApp: 'اطلب عبر واتساب',
}

const en = {
  topBanner: 'Fast delivery in Lebanon + Cash on Delivery',
  contactUs: 'Contact us',
  tagline: 'Genuine electronics at sharp prices',
  navProducts: 'Products',
  navCategories: 'Categories',
  navWhyUs: 'Why us',
  navFAQ: 'FAQ',
  whatsappCTA: 'Order on WhatsApp',
  whatsappLink: 'https://wa.me/96170216062',
  heroTitle: 'The best electronics deals from',
  heroSubtitle: 'Phones, earbuds, accessories, power banks & more — great prices with quick delivery nationwide.',
  shopNow: 'Shop now',
  orderOnWhatsApp: 'Order on WhatsApp',
}
