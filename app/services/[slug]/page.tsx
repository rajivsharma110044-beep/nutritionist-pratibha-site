import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection"; // 1. Cleanly importing your new component

const serviceDetails: Record<string, any> = {
  "pre-pregnancy-diet-plan": {
    title: "Pre-Pregnancy Diet Plan",
    tagline: "Prepare your body for a healthy conception.",
    description: "Pre-conception nutrition is vital for both partners. Our plan focuses on building up essential nutrient stores, optimizing egg quality, and creating the best possible environment for conception.",
    benefits: [
      "Optimize folic acid and essential vitamin stores",
      "Improve egg quality and reproductive health",
      "Balance pre-conception hormones",
      "Achieve an ideal BMI for a safer pregnancy"
    ]
  },
  "pregnancy-diet-plan": {
    title: "Pregnancy Diet Plan",
    tagline: "Nourishing you and your baby through every trimester.",
    description: "Pregnancy is a crucial time for optimal nutrition. Our maternal diet plans are carefully crafted to ensure you meet all your micro and macronutrient requirements, manage pregnancy cravings, and handle symptoms like nausea or gestational diabetes safely.",
    benefits: [
      "Trimester-specific meal planning",
      "Gestational diabetes prevention and management",
      "Healthy weight gain monitoring",
      "Relief from acidity, bloating, and nausea"
    ]
  },
  "postpartum-diet-plan": {
    title: "Postpartum Diet Plan",
    tagline: "Heal, recover, and regain your strength.",
    description: "The 'fourth trimester' is demanding on your body. Our postpartum nutrition strategy focuses heavily on tissue healing, replenishing lost iron and calcium, and providing you with the sustained energy needed to care for your newborn while prioritizing your own recovery.",
    benefits: [
      "Accelerate physical healing and tissue repair",
      "Replenish depleted nutrient stores",
      "Manage postpartum hair fall and skin changes",
      "Gradual, safe return to pre-pregnancy weight"
    ]
  },
  "lactation-diet-plan": {
    title: "Lactation Diet Plan",
    tagline: "Sustain a healthy milk supply with nutrient-dense foods.",
    description: "Breastfeeding burns extra calories and demands specific nutrients. We provide targeted dietary plans incorporating galactagogues (milk-boosting foods) to ensure an abundant, highly nutritious milk supply while keeping you energized and healthy.",
    benefits: [
      "Naturally boost breast milk production",
      "Improve the nutritional profile of breast milk",
      "Prevent maternal fatigue and bone density loss",
      "Hydration and energy management strategies"
    ]
  },
  "ivf-diet-plan": {
    title: "IVF Diet Plan",
    tagline: "Targeted nutrition to support your IVF success.",
    description: "Undergoing IVF is physically and emotionally taxing. Our clinical nutrition approach supports your fertility treatments by reducing systemic inflammation, improving uterine lining health, and managing the side effects of hormonal medications.",
    benefits: [
      "Anti-inflammatory diet to support implantation",
      "Nutrients to enhance egg and sperm quality",
      "Manage bloating and medication side effects",
      "Holistic support alongside your fertility clinic"
    ]
  },
  "pcos-pcod-diet-plan": {
    title: "PCOS & PCOD Management",
    tagline: "Balance your hormones naturally without starvation.",
    description: "Polycystic Ovary Syndrome (PCOS) requires a specialized approach. We focus on identifying your root cause—whether it's insulin resistance, inflammation, or adrenal fatigue—and create a sustainable nutrition plan that fits your lifestyle. Say goodbye to restrictive fad diets and hello to balanced living.",
    benefits: [
      "Regulate menstrual cycles naturally",
      "Manage hormonal acne and facial hair",
      "Improve insulin sensitivity",
      "Target stubborn lower-belly fat"
    ]
  },
  "weight-loss-diet-plan": {
    title: "Weight Loss Diet Plan",
    tagline: "Sustainable fat loss without strict deprivation.",
    description: "Forget extreme caloric deficits and crash diets. Our weight management program focuses on healing your metabolism, improving gut health, and building a better relationship with food. We design customized plans that seamlessly integrate into your busy daily routine.",
    benefits: [
      "Customized portion control strategies",
      "Metabolism-boosting nutrition",
      "Craving management and mindful eating",
      "Long-term, sustainable habit building"
    ]
  },
  "weight-gain-diet-plan": {
    title: "Weight Gain Diet Plan",
    tagline: "Healthy strategies for natural and safe weight scaling.",
    description: "Gaining weight healthily is about building muscle mass and bone density, not just adding fat. We create calorie-surplus plans utilizing nutrient-dense whole foods, healthy fats, and proteins to help you reach your ideal body composition naturally.",
    benefits: [
      "Structured, healthy caloric surplus",
      "Focus on muscle gain rather than fat storage",
      "Improve appetite and digestion naturally",
      "Boost overall stamina and physical strength"
    ]
  },
  "thyroid-management": {
    title: "Thyroid Management",
    tagline: "Metabolism-supporting diets for optimal thyroid function.",
    description: "Whether you are dealing with Hypothyroidism or Hashimoto's, what you eat deeply impacts your thyroid gland. We design plans rich in selenium, zinc, and iodine while managing goitrogenic foods to support your medication and naturally boost your sluggish metabolism.",
    benefits: [
      "Combat constant fatigue and lethargy",
      "Overcome thyroid-induced weight loss resistance",
      "Reduce systemic inflammation and antibodies",
      "Manage dry skin and thyroid-related hair fall"
    ]
  },
  "diabetes-management": {
    title: "Diabetes Management",
    tagline: "Blood sugar stabilization using clinical nutrition.",
    description: "Managing Type 2 Diabetes or Pre-diabetes doesn't mean giving up carbs completely; it means eating them smartly. Our plans focus on glycemic load, pairing macros correctly, and timing meals to prevent insulin spikes and keep your blood sugar stable all day.",
    benefits: [
      "Stabilize fasting and post-meal blood sugar levels",
      "Improve natural insulin sensitivity",
      "Prevent sugar crashes and extreme cravings",
      "Reduce dependency on high medication dosages over time"
    ]
  },
  "menopause-management": {
    title: "Menopause Management",
    tagline: "Nutritional support to manage symptoms and protect bone health.",
    description: "The transition into menopause brings rapid hormonal shifts. Our clinical approach helps manage hot flashes, mood swings, and the sudden slowing of metabolism. We heavily prioritize bone health and heart health through targeted, phytoestrogen-rich nutrition.",
    benefits: [
      "Reduce the frequency and severity of hot flashes",
      "Protect against osteoporosis and bone density loss",
      "Manage menopausal weight gain (specifically belly fat)",
      "Support cardiovascular health and cholesterol levels"
    ]
  },
  "endometriosis-management": {
    title: "Endometriosis Management",
    tagline: "Anti-inflammatory protocols to reduce flare-ups and pain.",
    description: "Endometriosis is an estrogen-dependent, inflammatory condition. Our highly specialized dietary protocol focuses on liver support for estrogen detox, aggressive anti-inflammatory foods, and gut-healing strategies to significantly reduce pain and flare-ups.",
    benefits: [
      "Lower systemic inflammation to reduce pelvic pain",
      "Support liver function to flush excess estrogen",
      "Manage 'endo-belly' and severe bloating",
      "Improve energy levels during menstrual cycles"
    ]
  },
  "skin-hair-nutrition": {
    title: "Skin & Hair Nutrition",
    tagline: "Inner healing for outer strength and a natural glow.",
    description: "Expensive serums can only do so much if your body lacks internal nourishment. Your skin and hair reflect your gut health and nutritional status. We build plans rich in antioxidants, biotin, and collagen-boosting nutrients to give you a vibrant, healthy glow from the inside out.",
    benefits: [
      "Combat severe hair fall and promote new growth",
      "Manage adult acne and frequent breakouts",
      "Improve skin elasticity and natural hydration",
      "Heal the gut-skin axis for long-term results"
    ]
  }
};

export default async function ServiceDetailPage(props: any) {
  
  let resolvedParams = props.params || {};
  if (resolvedParams instanceof Promise) {
    resolvedParams = await resolvedParams;
  }

  const slug = resolvedParams?.slug;
  const service = typeof slug === "string" ? serviceDetails[slug] : null;

  if (!service) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] relative z-10">
      
      {/* Main Service Content */}
      <div className="flex-grow pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <Link 
            href="/#services" 
            className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-pink-500 mb-12 transition-colors uppercase tracking-widest"
          >
            ← Back to Services
          </Link>

          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="mb-12 border-b border-pink-50 pb-12">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-pink-500 font-medium">
                {service.tagline}
              </p>
            </div>

            <div className="prose prose-lg text-slate-600 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Overview</h3>
              <p className="leading-relaxed mb-10">
                {service.description}
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What to Expect</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-2xl">
                    <span className="text-pink-500 font-bold mt-0.5">✓</span>
                    <span className="text-slate-700 font-medium text-sm md:text-base leading-tight">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Ready to take control of your health?
              </h3>
              <p className="text-slate-400 mb-8 max-w-lg text-sm md:text-base">
                Book a consultation today to start your personalized journey with Nutritionist Pratibha.
              </p>
              <Link 
                href="/book" 
                className="bg-pink-500 text-white font-bold text-sm md:text-base py-4 px-10 rounded-full inline-flex items-center justify-center shadow-xl shadow-pink-500/30 hover:bg-pink-600 hover:-translate-y-1 transition-all uppercase tracking-widest whitespace-nowrap"
              >
                Book This Plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Clean Contact Component */}
      <ContactSection />

    </div>
  );
}