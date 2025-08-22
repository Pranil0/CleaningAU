import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import blog1Full from "../assets/blog/blog1Full.png";
import blog2Full from "../assets/blog/blog2Full.png";
import blog3Full from "../assets/blog/blog3Full.png";
import blog4Full from "../assets/blog/blog4Full.png";
import blog5Full from "../assets/blog/blog5Full.png";
import blog6Full from "../assets/blog/blog6Full.png";

// Hero background image
import maskgroup from "../assets/maskgroup.png";

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "Pet Owners’ Cleaning Guide: Keeping Homes Clean and Safe for Everyone",
      img: blog1Full,
      sections: [
        {
          heading: "Introduction",
          content:
            "Pets bring joy and companionship to our homes, but they also introduce dirt, hair, and allergens that can affect both your family’s and your pets’ health. Maintaining a clean and safe environment is crucial for preventing illnesses, controlling odors, and creating a comfortable living space. This guide provides actionable steps for pet owners to keep their homes hygienic, organized, and welcoming."
        },
        {
          heading: "1. Daily Cleaning Habits",
          content:
            "A clean home starts with daily maintenance. Vacuuming high-traffic areas and furniture helps remove pet hair, dust, and dander before it accumulates. Wiping your pets’ paws after walks prevents dirt and germs from spreading across floors and furniture. It’s also essential to clean food and water bowls daily using warm water and mild detergent, ensuring your pets eat in a hygienic environment. Additionally, immediately attending to any accidents or spills helps prevent stains and unpleasant odors from setting in."
        },
        {
          heading: "2. Weekly Cleaning Routine",
          content:
            "Beyond daily maintenance, a weekly deep clean ensures a healthier living environment. Washing pet bedding, blankets, and soft toys in hot water removes bacteria and odors. Dusting and wiping surfaces, such as shelves, tables, and baseboards, reduces the accumulation of allergens. Litter boxes, cages, and other pet enclosures should be thoroughly cleaned with pet-safe solutions to prevent the growth of harmful bacteria. Floors should be mopped using non-toxic cleaners to maintain a safe environment for both pets and humans."
        },
        {
          heading: "3. Pet-Friendly Cleaning Products",
          content:
            "Using the right cleaning products is essential to protect your pets from harmful chemicals. Non-toxic sprays and disinfectants are ideal for surfaces your pets frequently touch. Enzyme-based cleaners are highly effective at neutralizing stains and odors from accidents, while natural solutions like baking soda and vinegar can safely deodorize and clean floors, carpets, and furniture without causing harm."
        },
        {
          heading: "4. Odor and Allergen Management",
          content:
            "Managing odors and allergens is key to a fresh and healthy home. HEPA filter air purifiers can trap pet dander, reducing allergy symptoms. Regular vacuuming of furniture, rugs, and carpets prevents buildup of hair and dust. Washing curtains, pet blankets, and other soft furnishings helps minimize allergens, and maintaining good ventilation ensures a clean airflow throughout the house. Finally, always wash your hands after handling pets to prevent the spread of germs."
        },
        {
          heading: "Conclusion",
          content:
            "Consistency in cleaning routines is the secret to a safe, fresh, and comfortable home for both pets and humans. By following daily and weekly maintenance habits, using pet-friendly products, and actively managing odors and allergens, you ensure your home remains a healthy and happy environment where everyone can thrive."
        }
      ]
    },
    {
      id: 2,
      title: "Why Professional Home Cleaning is Booming in Australia (and How You Can Benefit)",
      img: blog2Full,
      sections: [
        {
          heading: "Introduction",
          content:
            "In today’s fast-paced world, time has become a precious commodity. With busy work schedules, family responsibilities, and social commitments, many homeowners struggle to maintain the level of cleanliness they desire. This growing demand has fueled the boom of professional home cleaning services across Australia. Beyond just appearances, these services provide health benefits, convenience, and peace of mind, allowing homeowners to focus on what truly matters."
        },
        {
          heading: "1. Benefits of Professional Cleaning",
          content:
            "Hiring a professional cleaning service offers numerous advantages. Experts bring specialized equipment and knowledge to tackle areas that are often neglected during routine cleaning. Deep cleaning hard-to-reach spots, such as behind appliances, inside vents, or under furniture, helps eliminate dust, allergens, and bacteria. Regular professional cleaning also extends the life of furniture, carpets, and surfaces, maintaining your home’s value and appearance. Most importantly, it significantly reduces stress, giving homeowners more free time while ensuring a healthy living environment."
        },
        {
          heading: "2. Typical Services Offered",
          content:
            "Professional cleaning companies provide a wide range of services tailored to meet specific needs. Common offerings include carpet and upholstery cleaning, bathroom and kitchen deep cleans, window and surface polishing, floor mopping and polishing, and specialized treatments for allergies or pet-related messes. Many services also use eco-friendly products that are safe for children, pets, and the environment, making the cleaning process both effective and sustainable."
        },
        {
          heading: "3. Tips for Choosing the Right Service",
          content:
            "Not all cleaning services are created equal, so selecting the right provider is crucial. Research online reviews and testimonials to understand the quality of service. Confirm that the company uses environmentally friendly cleaning products and equipment. Compare pricing structures and service packages to ensure you get value for your money. Additionally, verify that the service offers insurance coverage and guarantees, providing peace of mind in case of any accidental damage during cleaning."
        },
        {
          heading: "Conclusion",
          content:
            "Professional home cleaning is no longer a luxury; it has become a practical solution for modern homeowners seeking convenience, hygiene, and time efficiency. By investing in expert cleaning services, you maintain a healthier, cleaner, and more comfortable home, while freeing up valuable time to focus on family, work, and personal activities. The boom in professional cleaning is a reflection of its undeniable benefits and growing importance in contemporary Australian lifestyles."
        }
      ]
    },
    {
      id: 3,
      title: "How Often Should You Really Clean These 15 Household Items?",
      img: blog3Full,
      sections: [
        {
          heading: "Introduction",
          content:
            "A clean home is essential for health and hygiene. Many household items are often overlooked, allowing germs, bacteria, and allergens to accumulate. Knowing how often to clean specific items helps prevent illness and ensures a fresh, safe living environment. This guide provides a practical cleaning schedule for 15 commonly used household items."
        },
        {
          heading: "Daily Cleaning",
          content:
            "Kitchen Counters – Wipe down after every meal to prevent bacteria and food residue buildup.\n" +
            "Stovetops – Clean spills and splatters daily to avoid grease hardening.\n" +
            "Dishes & Utensils – Wash immediately after use to prevent contamination and odors.\n" +
            "Bathroom Sinks – Rinse and wipe daily to remove toothpaste, soap scum, and germs.\n" +
            "Faucets – Polish with disinfectant wipes daily to kill bacteria.\n" +
            "High-Touch Surfaces (Door Handles, Light Switches, Remotes) – Sanitize daily to reduce the spread of germs, especially during flu season."
        },
        {
          heading: "Weekly Cleaning",
          content:
            "Bed Linens – Wash pillowcases and sheets weekly to remove sweat, dust mites, and allergens.\n" +
            "Pillowcases – Highlight separately because they accumulate oils and bacteria from skin and hair.\n" +
            "Floors – Vacuum or mop weekly to eliminate dust, pet hair, and dirt.\n" +
            "Carpets – Vacuum weekly to prevent buildup and maintain air quality.\n" +
            "Windows & Mirrors – Wipe once a week for streak-free, brighter living spaces.\n" +
            "Bathroom Tiles & Showers – Scrub weekly to prevent mold, mildew, and grime buildup."
        },
        {
          heading: "Monthly Cleaning",
          content:
            "Curtains & Blinds – Dust or vacuum monthly to reduce allergens.\n" +
            "Upholstered Furniture (Sofas, Chairs, Cushions) – Vacuum and deep clean monthly to remove dust, pet hair, and odors.\n" +
            "Refrigerator (Interior) – Wipe shelves and drawers monthly to prevent bacteria, spills, and unpleasant smells."
        },
        {
          heading: "Conclusion",
          content:
            "By following this cleaning schedule—daily, weekly, and monthly—you can maintain a hygienic, safe, and visually appealing home. Consistent cleaning prevents the accumulation of germs and allergens, ensuring a healthier environment for your family while reducing the stress of large, infrequent cleaning tasks."
        }
      ]
    },
   {
  id: 3,
  title: "How Often Should You Really Clean These 15 Household Items?",
  img: blog3Full,
  sections: [
    {
      heading: "Introduction",
      content:
        "A clean home is essential for health and hygiene. Many household items are often overlooked, allowing germs, bacteria, and allergens to accumulate. Knowing how often to clean specific items helps prevent illness and ensures a fresh, safe living environment. This guide provides a practical cleaning schedule for 15 commonly used household items."
    },
    {
      heading: "Daily Cleaning",
      content: 
        "• Kitchen Counters – Wipe down after every meal to prevent bacteria and food residue buildup.\n" +
        "• Stovetops – Clean spills and splatters daily to avoid grease hardening.\n" +
        "• Dishes & Utensils – Wash immediately after use to prevent contamination and odors.\n" +
        "• Bathroom Sinks – Rinse and wipe daily to remove toothpaste, soap scum, and germs.\n" +
        "• Faucets – Polish with disinfectant wipes daily to kill bacteria.\n" +
        "• High-Touch Surfaces (Door Handles, Light Switches, Remotes) – Sanitize daily to reduce the spread of germs, especially during flu season."
    },
    {
      heading: "Weekly Cleaning",
      content: 
        "• Bed Linens – Wash pillowcases and sheets weekly to remove sweat, dust mites, and allergens.\n" +
        "• Pillowcases – Highlight separately because they accumulate oils and bacteria from skin and hair.\n" +
        "• Floors – Vacuum or mop weekly to eliminate dust, pet hair, and dirt.\n" +
        "• Carpets – Vacuum weekly to prevent buildup and maintain air quality.\n" +
        "• Windows & Mirrors – Wipe once a week for streak-free, brighter living spaces.\n" +
        "• Bathroom Tiles & Showers – Scrub weekly to prevent mold, mildew, and grime buildup."
    },
    {
      heading: "Monthly Cleaning",
      content:
        "• Curtains & Blinds – Dust or vacuum monthly to reduce allergens.\n" +
        "• Upholstered Furniture (Sofas, Chairs, Cushions) – Vacuum and deep clean monthly to remove dust, pet hair, and odors.\n" +
        "• Refrigerator (Interior) – Wipe shelves and drawers monthly to prevent bacteria, spills, and unpleasant smells."
    },
    {
      heading: "Conclusion",
      content:
        "By following this cleaning schedule—daily, weekly, and monthly—you can maintain a hygienic, safe, and visually appealing home. Consistent cleaning prevents the accumulation of germs and allergens, ensuring a healthier environment for your family while reducing the stress of large, infrequent cleaning tasks."
    }
  ]
}

,
    {
  id: 4,
  title: "10 Everyday Cleaning Hacks That Actually Work",
  img: blog4Full,
  sections: [
    {
      heading: "Introduction",
      content:
        "Cleaning doesn’t have to be overwhelming or time-consuming. With the right techniques and small hacks, you can make your home sparkle while saving effort and money. These 10 practical cleaning hacks are simple, effective, and easy to integrate into your daily routine."
    },
    {
      heading: "1. Deodorize Carpets with Baking Soda",
      content:
        "Sprinkle baking soda evenly on your carpets and let it sit for 15–20 minutes before vacuuming. Baking soda neutralizes odors and refreshes carpet fibers, leaving your floors smelling clean and looking vibrant."
    },
    {
      heading: "2. Clean Blinds with Tongs and Microfiber Cloths",
      content:
        "Wrap a microfiber cloth around kitchen tongs and slide them across each slat of your blinds. This method is faster and more thorough than traditional dusting, effectively removing accumulated dust and grime."
    },
    {
      heading: "3. Remove Hard Water Stains with Lemon Juice",
      content:
        "Rub fresh lemon juice on faucets, sinks, and glass surfaces to dissolve hard water stains. The natural acidity helps remove buildup and leaves surfaces sparkling clean without harsh chemicals."
    },
    {
      heading: "4. Streak-Free Windows with Vinegar Solution",
      content:
        "Mix equal parts water and white vinegar in a spray bottle. Spray the solution on your windows and wipe with a microfiber cloth for clear, streak-free results. This inexpensive hack ensures bright and polished windows."
    },
    {
      heading: "5. Dust Baseboards Using Dryer Sheets",
      content:
        "Run a dryer sheet along your baseboards to attract dust and leave a subtle fresh scent. This method is quick, simple, and more effective than dry dusting alone."
    },
    {
      heading: "6. Clean Ceiling Fans with a Pillowcase",
      content:
        "Slide an old pillowcase over each ceiling fan blade and gently wipe away dust inside the pillowcase. This prevents dust from falling onto furniture and floors, keeping your home cleaner during the process."
    },
    {
      heading: "7. Polish Silver with Toothpaste",
      content:
        "Apply non-gel toothpaste to tarnished silverware or jewelry. Rub gently with a soft cloth, rinse, and dry to restore shine. This hack is a cost-effective alternative to commercial silver cleaners."
    },
    {
      heading: "8. Remove Pet Hair Easily with Rubber Gloves",
      content:
        "Dampen rubber gloves slightly and run your hands over furniture, carpets, or clothing. The static helps lift pet hair effortlessly, saving time and effort compared to vacuuming alone."
    },
    {
      heading: "9. Microwave Cleaning Made Simple",
      content:
        "Place a bowl of water with lemon slices in the microwave and heat for 3–5 minutes. The steam loosens grime inside, making it easy to wipe clean with minimal scrubbing."
    },
    {
      heading: "10. Keep Cleaning Supplies in Each Major Room",
      content:
        "Store essential cleaners in the kitchen, bathroom, and laundry area. This reduces the time spent fetching products and encourages quick, efficient cleaning sessions throughout the house."
    },
    {
      heading: "Conclusion",
      content:
        "Incorporating these 10 cleaning hacks into your routine saves time, reduces effort, and ensures your home stays clean, fresh, and hygienic. Small changes can make a big difference in maintaining a sparkling and organized living space."
    }
  ]
},
    {
  id: 5,
  title: "Cleaning Schedules That Actually Work: Daily, Weekly, Monthly",
  img: blog5Full,
  sections: [
    {
      heading: "Introduction",
      content:
        "Maintaining a clean and organized home can feel overwhelming without a structured plan. A well-thought-out cleaning schedule helps homeowners stay on top of tasks, reduce stress, and ensure that all areas of the house are properly cared for. This guide breaks down cleaning routines into daily, weekly, and monthly tasks for efficient and manageable home maintenance."
    },
    {
      heading: "1. Daily Tasks",
      content:
        "Daily cleaning habits keep your home neat and prevent dirt and clutter from piling up. Essential daily tasks include making beds, wiping kitchen counters and tables after meals, cleaning bathroom sinks and faucets, and sweeping high-traffic areas. By performing these small actions consistently, you maintain a fresh, comfortable living environment and make weekly cleaning much easier."
    },
    {
      heading: "2. Weekly Tasks",
      content:
        "Weekly cleaning addresses areas that require more attention and are not practical to clean every day. Vacuuming and mopping floors, dusting furniture and shelves, cleaning bathrooms thoroughly, and washing bed linens are key components of weekly maintenance. Regular weekly cleaning helps reduce allergens, extends the life of furniture and fabrics, and keeps your home looking polished and welcoming."
    },
    {
      heading: "3. Monthly Tasks",
      content:
        "Monthly tasks focus on deep-cleaning and less frequently attended areas. This includes washing curtains and drapes, cleaning inside appliances such as ovens and refrigerators, dusting and polishing furniture, and tackling neglected corners or storage spaces. Monthly maintenance ensures that accumulated dirt, dust, and grime do not become long-term problems, promoting a healthier home environment."
    },
    {
      heading: "Conclusion",
      content:
        "Following a structured cleaning schedule—daily, weekly, and monthly—simplifies home maintenance and reduces the feeling of being overwhelmed. Consistent routines ensure a hygienic, organized, and visually appealing home, creating a comfortable space for all household members while saving time and effort in the long run."
    }
  ]
}
,
    {
  id: 6,
  title: "5 Common Cleaning Mistakes That Could Be Harming Your Health",
  img: blog6Full,
  sections: [
    {
      heading: "Introduction",
      content:
        "Even with the best intentions, many people unknowingly make cleaning mistakes that can negatively impact health. Using improper techniques, harsh chemicals, or neglecting certain areas may expose you and your family to allergens, bacteria, and other hazards. This guide highlights five common mistakes and how to avoid them for a healthier home environment."
    },
    {
      heading: "1. Using Harsh Chemicals",
      content:
        "Over-reliance on strong chemical cleaners can irritate the skin, eyes, and respiratory system. Prolonged exposure may even cause long-term health issues. Opt for eco-friendly, non-toxic alternatives such as vinegar, baking soda, or enzyme-based cleaners. These options effectively clean surfaces while keeping your home safe for children and pets."
    },
    {
      heading: "2. Neglecting High-Touch Surfaces",
      content:
        "High-touch areas like door handles, light switches, remote controls, and faucets are hotspots for germs and bacteria. Failing to clean them regularly can increase the risk of illness. Make it a habit to disinfect these surfaces daily using safe, gentle cleaners or disinfectant wipes."
    },
    {
      heading: "3. Improper Vacuuming and Dusting",
      content:
        "Vacuuming without a HEPA filter, using old vacuum bags, or dusting with dry cloths can spread dust and allergens rather than removing them. Use a vacuum with proper filtration and microfiber cloths to trap dust effectively. Clean floors, carpets, and upholstery regularly to reduce allergens and maintain air quality."
    },
    {
      heading: "4. Ignoring Pet Areas",
      content:
        "Pet zones, including bedding, litter boxes, cages, and feeding areas, harbor bacteria, odors, and dander. Neglecting these spaces can affect both your health and your pets’. Clean and disinfect pet areas frequently using pet-safe products to maintain hygiene and reduce allergens in your home."
    },
    {
      heading: "5. Overlooking Air Quality",
      content:
        "Dust, pollen, and other allergens accumulate in indoor air if ventilation and filtration are neglected. Use HEPA filter air purifiers, open windows when possible, and clean vents and filters regularly. Maintaining good air quality is essential for reducing respiratory issues and creating a healthier living environment."
    },
    {
      heading: "Conclusion",
      content:
        "Awareness and proper cleaning habits are key to a safe and healthy home. By avoiding these common mistakes and adopting effective cleaning techniques, you can protect your family from harmful germs, allergens, and chemical exposure while maintaining a comfortable and hygienic living space."
    }
  ]
}
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="text-center py-20">Blog not found!</div>;

  return (
    <div className="bg-white text-gray-800 pt-[100px]">
      {/* Hero Section */}
      <div
        className="relative w-full h-[250px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${maskgroup})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-[#4977E5]/80"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Blog Details</h1>
          <div className="flex items-center justify-center gap-2 text-sm mt-2">
            <FaHome className="text-white" />
            <Link to="/" className="hover:underline hover:text-gray-200 transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link to="/blog" className="hover:underline hover:text-gray-200 transition-colors">
              Blog
            </Link>
            <span>›</span>
            <span className="font-medium">{blog.title}</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="max-w-4xl mx-auto py-12 px-6 space-y-8">
        <img src={blog.img} alt={blog.title} className="w-full h-auto rounded-lg" />
        <h2 className="text-3xl font-bold">{blog.title}</h2>

        {blog.sections.map((section, index) => (
          <div key={index} className="mt-6 space-y-2">
            <h3 className="text-2xl font-semibold">{section.heading}</h3>

            {section.content && (
              <div className="text-gray-700 leading-relaxed space-y-2">
                {section.content.split("\n").map((line, i) => (
                  <p key={i}>
                    {line.includes("–") ? (
                      <span className="block ml-4 list-disc">• {line.trim()}</span>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogDetail;