import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(150000);
  const [selectedTag, setSelectedTag] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsPerPage = 6;

  // Product Data
  const products = {
    solar: {
      name: "Solar Panels",
      icon: "☀️",
      subCategories: [
        {
          name: "Monocrystalline",
          items: [
            {
              id: 1,
              name: "Mono 400W Solar Panel",
              price: 8500,
              rating: 4.8,
              reviews: 124,
              specs: ["22% Efficiency", "25-Year Warranty", "Anti-Reflective Coating", "PID Resistant"],
              features: ["High efficiency", "Low light performance", "Durable design"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              badge: "Best Seller",
              category: "solar",
              subCategory: "Monocrystalline",
              description: "High-performance monocrystalline solar panel designed for maximum energy output. Perfect for residential and commercial installations.",
              fullSpecs: [
                { label: "Power Output", value: "400W" },
                { label: "Efficiency", value: "22%" },
                { label: "Warranty", value: "25 Years" },
                { label: "Cell Type", value: "Monocrystalline" },
                { label: "Dimensions", value: "2094 x 1038 x 35mm" },
                { label: "Weight", value: "22.5 kg" },
                { label: "Operating Temp", value: "-40°C to +85°C" },
                { label: "Certification", value: "IEC 61215, IEC 61730" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 2,
              name: "Mono 450W Solar Panel",
              price: 9500,
              rating: 4.9,
              reviews: 98,
              specs: ["22.5% Efficiency", "25-Year Warranty", "Anti-Reflective Coating", "PID Resistant"],
              features: ["High efficiency", "Excellent performance", "Premium quality"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              badge: "Popular",
              category: "solar",
              subCategory: "Monocrystalline",
              description: "Premium monocrystalline solar panel with advanced cell technology for superior performance in all weather conditions.",
              fullSpecs: [
                { label: "Power Output", value: "450W" },
                { label: "Efficiency", value: "22.5%" },
                { label: "Warranty", value: "25 Years" },
                { label: "Cell Type", value: "Monocrystalline" },
                { label: "Dimensions", value: "2094 x 1038 x 35mm" },
                { label: "Weight", value: "23.5 kg" },
                { label: "Operating Temp", value: "-40°C to +85°C" },
                { label: "Certification", value: "IEC 61215, IEC 61730" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 3,
              name: "Mono 550W Solar Panel",
              price: 11500,
              rating: 4.7,
              reviews: 76,
              specs: ["23% Efficiency", "25-Year Warranty", "Anti-Reflective Coating", "PID Resistant"],
              features: ["Ultra high efficiency", "Superior performance", "Heavy duty"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              category: "solar",
              subCategory: "Monocrystalline",
              description: "Ultra-high efficiency monocrystalline panel with advanced PERC technology for maximum power generation.",
              fullSpecs: [
                { label: "Power Output", value: "550W" },
                { label: "Efficiency", value: "23%" },
                { label: "Warranty", value: "25 Years" },
                { label: "Cell Type", value: "Monocrystalline PERC" },
                { label: "Dimensions", value: "2278 x 1134 x 35mm" },
                { label: "Weight", value: "28.5 kg" },
                { label: "Operating Temp", value: "-40°C to +85°C" },
                { label: "Certification", value: "IEC 61215, IEC 61730" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 4,
              name: "Mono 600W Solar Panel",
              price: 13500,
              rating: 4.9,
              reviews: 45,
              specs: ["23.5% Efficiency", "25-Year Warranty", "Anti-Reflective Coating", "PID Resistant"],
              features: ["Maximum efficiency", "Industrial grade", "Best in class"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              badge: "New",
              category: "solar",
              subCategory: "Monocrystalline",
              description: "Industry-leading 600W monocrystalline panel with next-generation cell technology for unmatched performance.",
              fullSpecs: [
                { label: "Power Output", value: "600W" },
                { label: "Efficiency", value: "23.5%" },
                { label: "Warranty", value: "25 Years" },
                { label: "Cell Type", value: "Monocrystalline" },
                { label: "Dimensions", value: "2384 x 1134 x 35mm" },
                { label: "Weight", value: "30.5 kg" },
                { label: "Operating Temp", value: "-40°C to +85°C" },
                { label: "Certification", value: "IEC 61215, IEC 61730" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            }
          ]
        },
        {
          name: "Polycrystalline",
          items: [
            {
              id: 5,
              name: "Poly 350W Solar Panel",
              price: 7500,
              rating: 4.5,
              reviews: 89,
              specs: ["19% Efficiency", "25-Year Warranty", "Cost Effective", "Reliable"],
              features: ["Budget friendly", "Good performance", "Trusted quality"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              category: "solar",
              subCategory: "Polycrystalline",
              description: "Cost-effective polycrystalline solar panel offering reliable performance for budget-conscious customers.",
              fullSpecs: [
                { label: "Power Output", value: "350W" },
                { label: "Efficiency", value: "19%" },
                { label: "Warranty", value: "25 Years" },
                { label: "Cell Type", value: "Polycrystalline" },
                { label: "Dimensions", value: "2000 x 1000 x 35mm" },
                { label: "Weight", value: "20.5 kg" },
                { label: "Operating Temp", value: "-40°C to +85°C" },
                { label: "Certification", value: "IEC 61215" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 6,
              name: "Poly 400W Solar Panel",
              price: 8900,
              rating: 4.6,
              reviews: 67,
              specs: ["19.5% Efficiency", "25-Year Warranty", "Cost Effective", "Reliable"],
              features: ["Great value", "Reliable performance", "Durable"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              category: "solar",
              subCategory: "Polycrystalline",
              description: "High-value polycrystalline panel with improved efficiency and durability for residential installations.",
              fullSpecs: [
                { label: "Power Output", value: "400W" },
                { label: "Efficiency", value: "19.5%" },
                { label: "Warranty", value: "25 Years" },
                { label: "Cell Type", value: "Polycrystalline" },
                { label: "Dimensions", value: "2094 x 1038 x 35mm" },
                { label: "Weight", value: "22 kg" },
                { label: "Operating Temp", value: "-40°C to +85°C" },
                { label: "Certification", value: "IEC 61215" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            }
          ]
        }
      ]
    },
    inverter: {
      name: "Inverters",
      icon: "⚡",
      subCategories: [
        {
          name: "Solar Inverters",
          items: [
            {
              id: 7,
              name: "Solar Inverter 3kW",
              price: 25000,
              rating: 4.7,
              reviews: 56,
              specs: ["3kW Capacity", "MPPT Technology", "IP65 Rating", "5-Year Warranty"],
              features: ["High efficiency", "Smart monitoring", "Safe operation"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              badge: "Popular",
              category: "inverter",
              subCategory: "Solar Inverters",
              description: "Smart 3kW solar inverter with advanced MPPT technology for optimal solar energy conversion.",
              fullSpecs: [
                { label: "Power Rating", value: "3kW" },
                { label: "Input Voltage", value: "12V/24V" },
                { label: "Output Voltage", value: "230V AC" },
                { label: "Efficiency", value: "95%" },
                { label: "MPPT", value: "Yes" },
                { label: "IP Rating", value: "IP65" },
                { label: "Warranty", value: "5 Years" },
                { label: "Dimensions", value: "450 x 350 x 150mm" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 8,
              name: "Solar Inverter 5kW",
              price: 35000,
              rating: 4.8,
              reviews: 78,
              specs: ["5kW Capacity", "MPPT Technology", "IP65 Rating", "5-Year Warranty"],
              features: ["Premium performance", "Advanced monitoring", "Reliable"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              badge: "Best Seller",
              category: "inverter",
              subCategory: "Solar Inverters",
              description: "High-performance 5kW solar inverter with advanced monitoring and maximum power point tracking.",
              fullSpecs: [
                { label: "Power Rating", value: "5kW" },
                { label: "Input Voltage", value: "24V/48V" },
                { label: "Output Voltage", value: "230V AC" },
                { label: "Efficiency", value: "96%" },
                { label: "MPPT", value: "Yes" },
                { label: "IP Rating", value: "IP65" },
                { label: "Warranty", value: "5 Years" },
                { label: "Dimensions", value: "550 x 400 x 180mm" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 9,
              name: "Solar Inverter 10kW",
              price: 55000,
              rating: 4.9,
              reviews: 34,
              specs: ["10kW Capacity", "MPPT Technology", "IP65 Rating", "5-Year Warranty"],
              features: ["Commercial grade", "High capacity", "Industrial quality"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              category: "inverter",
              subCategory: "Solar Inverters",
              description: "Commercial-grade 10kW solar inverter designed for large-scale installations and industrial applications.",
              fullSpecs: [
                { label: "Power Rating", value: "10kW" },
                { label: "Input Voltage", value: "48V/96V" },
                { label: "Output Voltage", value: "415V 3-Phase" },
                { label: "Efficiency", value: "97%" },
                { label: "MPPT", value: "Yes" },
                { label: "IP Rating", value: "IP65" },
                { label: "Warranty", value: "5 Years" },
                { label: "Dimensions", value: "650 x 500 x 200mm" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            }
          ]
        },
        {
          name: "Home Inverters",
          items: [
            {
              id: 10,
              name: "Home Inverter 1kW",
              price: 12000,
              rating: 4.6,
              reviews: 145,
              specs: ["1kW Capacity", "Pure Sine Wave", "LCD Display", "3-Year Warranty"],
              features: ["Compact design", "Easy installation", "Quiet operation"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              category: "inverter",
              subCategory: "Home Inverters",
              description: "Compact 1kW home inverter with pure sine wave output for sensitive electronic devices.",
              fullSpecs: [
                { label: "Power Rating", value: "1kW" },
                { label: "Input Voltage", value: "12V" },
                { label: "Output Voltage", value: "230V AC" },
                { label: "Waveform", value: "Pure Sine Wave" },
                { label: "Display", value: "LCD" },
                { label: "Warranty", value: "3 Years" },
                { label: "Dimensions", value: "300 x 250 x 120mm" },
                { label: "Weight", value: "8 kg" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 11,
              name: "Home Inverter 2kW",
              price: 18000,
              rating: 4.7,
              reviews: 112,
              specs: ["2kW Capacity", "Pure Sine Wave", "LCD Display", "3-Year Warranty"],
              features: ["Powerful", "Efficient", "Smart features"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              badge: "Popular",
              category: "inverter",
              subCategory: "Home Inverters",
              description: "Powerful 2kW home inverter with advanced features and intelligent battery management.",
              fullSpecs: [
                { label: "Power Rating", value: "2kW" },
                { label: "Input Voltage", value: "24V" },
                { label: "Output Voltage", value: "230V AC" },
                { label: "Waveform", value: "Pure Sine Wave" },
                { label: "Display", value: "LCD with Smart Features" },
                { label: "Warranty", value: "3 Years" },
                { label: "Dimensions", value: "380 x 300 x 150mm" },
                { label: "Weight", value: "12 kg" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            }
          ]
        }
      ]
    },
    battery: {
      name: "Batteries",
      icon: "🔋",
      subCategories: [
        {
          name: "Lithium-ion Batteries",
          items: [
            {
              id: 12,
              name: "Lithium Battery 100Ah",
              price: 15000,
              rating: 4.8,
              reviews: 89,
              specs: ["100Ah Capacity", "Deep Cycle", "5-Year Warranty", "Maintenance Free"],
              features: ["Long life", "Fast charging", "Lightweight"],
              image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop",
              badge: "Best Seller",
              category: "battery",
              subCategory: "Lithium-ion Batteries",
              description: "Premium 100Ah lithium-ion battery with advanced BMS for maximum safety and performance.",
              fullSpecs: [
                { label: "Capacity", value: "100Ah" },
                { label: "Voltage", value: "12.8V" },
                { label: "Cycle Life", value: "2000+ Cycles" },
                { label: "Chemistry", value: "LiFePO4" },
                { label: "Weight", value: "13 kg" },
                { label: "Warranty", value: "5 Years" },
                { label: "BMS", value: "Yes" },
                { label: "Dimensions", value: "330 x 170 x 220mm" }
              ],
              images: [
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 13,
              name: "Lithium Battery 150Ah",
              price: 22000,
              rating: 4.9,
              reviews: 67,
              specs: ["150Ah Capacity", "Deep Cycle", "5-Year Warranty", "Maintenance Free"],
              features: ["Premium quality", "High capacity", "Reliable"],
              image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop",
              category: "battery",
              subCategory: "Lithium-ion Batteries",
              description: "High-capacity 150Ah lithium-ion battery with superior deep-cycle performance.",
              fullSpecs: [
                { label: "Capacity", value: "150Ah" },
                { label: "Voltage", value: "12.8V" },
                { label: "Cycle Life", value: "2500+ Cycles" },
                { label: "Chemistry", value: "LiFePO4" },
                { label: "Weight", value: "17 kg" },
                { label: "Warranty", value: "5 Years" },
                { label: "BMS", value: "Yes" },
                { label: "Dimensions", value: "350 x 180 x 240mm" }
              ],
              images: [
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 14,
              name: "Lithium Battery 200Ah",
              price: 28000,
              rating: 4.9,
              reviews: 45,
              specs: ["200Ah Capacity", "Deep Cycle", "5-Year Warranty", "Maintenance Free"],
              features: ["Industrial grade", "Heavy duty", "Maximum capacity"],
              image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop",
              badge: "New",
              category: "battery",
              subCategory: "Lithium-ion Batteries",
              description: "Maximum capacity 200Ah lithium-ion battery designed for heavy-duty industrial applications.",
              fullSpecs: [
                { label: "Capacity", value: "200Ah" },
                { label: "Voltage", value: "12.8V" },
                { label: "Cycle Life", value: "3000+ Cycles" },
                { label: "Chemistry", value: "LiFePO4" },
                { label: "Weight", value: "22 kg" },
                { label: "Warranty", value: "5 Years" },
                { label: "BMS", value: "Yes" },
                { label: "Dimensions", value: "380 x 200 x 260mm" }
              ],
              images: [
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop"
              ]
            }
          ]
        },
        {
          name: "Tubular Batteries",
          items: [
            {
              id: 15,
              name: "Tubular Battery 150Ah",
              price: 12000,
              rating: 4.5,
              reviews: 234,
              specs: ["150Ah Capacity", "Deep Discharge", "3-Year Warranty", "Water Fill"],
              features: ["Budget friendly", "Durable", "Reliable"],
              image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop",
              category: "battery",
              subCategory: "Tubular Batteries",
              description: "Reliable tubular battery with deep discharge capability for uninterrupted power backup.",
              fullSpecs: [
                { label: "Capacity", value: "150Ah" },
                { label: "Voltage", value: "12V" },
                { label: "Type", value: "Tubular" },
                { label: "Deep Discharge", value: "Yes" },
                { label: "Weight", value: "35 kg" },
                { label: "Warranty", value: "3 Years" },
                { label: "Maintenance", value: "Water Fill Required" },
                { label: "Dimensions", value: "400 x 180 x 250mm" }
              ],
              images: [
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 16,
              name: "Tubular Battery 200Ah",
              price: 16000,
              rating: 4.6,
              reviews: 189,
              specs: ["200Ah Capacity", "Deep Discharge", "3-Year Warranty", "Water Fill"],
              features: ["Excellent value", "Long lasting", "Trusted"],
              image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop",
              badge: "Popular",
              category: "battery",
              subCategory: "Tubular Batteries",
              description: "High-capacity tubular battery with excellent deep discharge recovery and long life.",
              fullSpecs: [
                { label: "Capacity", value: "200Ah" },
                { label: "Voltage", value: "12V" },
                { label: "Type", value: "Tubular" },
                { label: "Deep Discharge", value: "Yes" },
                { label: "Weight", value: "40 kg" },
                { label: "Warranty", value: "3 Years" },
                { label: "Maintenance", value: "Water Fill Required" },
                { label: "Dimensions", value: "450 x 190 x 260mm" }
              ],
              images: [
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop"
              ]
            }
          ]
        }
      ]
    },
    generator: {
      name: "Generators",
      icon: "🔄",
      subCategories: [
        {
          name: "Diesel Generators",
          items: [
            {
              id: 17,
              name: "Diesel Generator 5kVA",
              price: 45000,
              rating: 4.6,
              reviews: 56,
              specs: ["5kVA Capacity", "Silent Operation", "Automatic Start", "2-Year Warranty"],
              features: ["Fuel efficient", "Quiet", "Reliable"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              category: "generator",
              subCategory: "Diesel Generators",
              description: "Fuel-efficient 5kVA diesel generator with silent operation and automatic start feature.",
              fullSpecs: [
                { label: "Power Rating", value: "5kVA" },
                { label: "Fuel Type", value: "Diesel" },
                { label: "Noise Level", value: "65 dB" },
                { label: "Start Type", value: "Automatic" },
                { label: "Fuel Tank", value: "20L" },
                { label: "Runtime", value: "8 Hours" },
                { label: "Warranty", value: "2 Years" },
                { label: "Weight", value: "120 kg" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 18,
              name: "Diesel Generator 10kVA",
              price: 75000,
              rating: 4.7,
              reviews: 78,
              specs: ["10kVA Capacity", "Silent Operation", "Automatic Start", "2-Year Warranty"],
              features: ["Powerful", "Efficient", "Industrial quality"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              badge: "Popular",
              category: "generator",
              subCategory: "Diesel Generators",
              description: "Powerful 10kVA diesel generator ideal for commercial and industrial applications.",
              fullSpecs: [
                { label: "Power Rating", value: "10kVA" },
                { label: "Fuel Type", value: "Diesel" },
                { label: "Noise Level", value: "68 dB" },
                { label: "Start Type", value: "Automatic" },
                { label: "Fuel Tank", value: "35L" },
                { label: "Runtime", value: "10 Hours" },
                { label: "Warranty", value: "2 Years" },
                { label: "Weight", value: "180 kg" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 19,
              name: "Diesel Generator 25kVA",
              price: 150000,
              rating: 4.8,
              reviews: 45,
              specs: ["25kVA Capacity", "Silent Operation", "Automatic Start", "2-Year Warranty"],
              features: ["Heavy duty", "Commercial grade", "Superior performance"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              badge: "Best Seller",
              category: "generator",
              subCategory: "Diesel Generators",
              description: "Heavy-duty 25kVA diesel generator designed for maximum power output and reliability.",
              fullSpecs: [
                { label: "Power Rating", value: "25kVA" },
                { label: "Fuel Type", value: "Diesel" },
                { label: "Noise Level", value: "72 dB" },
                { label: "Start Type", value: "Automatic" },
                { label: "Fuel Tank", value: "60L" },
                { label: "Runtime", value: "12 Hours" },
                { label: "Warranty", value: "2 Years" },
                { label: "Weight", value: "320 kg" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            }
          ]
        },
        {
          name: "Petrol Generators",
          items: [
            {
              id: 20,
              name: "Petrol Generator 2kVA",
              price: 25000,
              rating: 4.4,
              reviews: 123,
              specs: ["2kVA Capacity", "Portable", "Easy Start", "2-Year Warranty"],
              features: ["Portable", "Lightweight", "Easy to use"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              category: "generator",
              subCategory: "Petrol Generators",
              description: "Portable 2kVA petrol generator perfect for home backup and outdoor use.",
              fullSpecs: [
                { label: "Power Rating", value: "2kVA" },
                { label: "Fuel Type", value: "Petrol" },
                { label: "Noise Level", value: "62 dB" },
                { label: "Start Type", value: "Recoil" },
                { label: "Fuel Tank", value: "12L" },
                { label: "Runtime", value: "6 Hours" },
                { label: "Warranty", value: "2 Years" },
                { label: "Weight", value: "35 kg" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 21,
              name: "Petrol Generator 3kVA",
              price: 32000,
              rating: 4.5,
              reviews: 98,
              specs: ["3kVA Capacity", "Portable", "Easy Start", "2-Year Warranty"],
              features: ["Reliable", "Portable", "Great value"],
              image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
              category: "generator",
              subCategory: "Petrol Generators",
              description: "Reliable 3kVA petrol generator with excellent fuel efficiency and portability.",
              fullSpecs: [
                { label: "Power Rating", value: "3kVA" },
                { label: "Fuel Type", value: "Petrol" },
                { label: "Noise Level", value: "64 dB" },
                { label: "Start Type", value: "Recoil/Electric" },
                { label: "Fuel Tank", value: "15L" },
                { label: "Runtime", value: "7 Hours" },
                { label: "Warranty", value: "2 Years" },
                { label: "Weight", value: "45 kg" }
              ],
              images: [
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
              ]
            }
          ]
        }
      ]
    },
    hybrid: {
      name: "Hybrid Systems",
      icon: "🌐",
      subCategories: [
        {
          name: "Solar + Inverter",
          items: [
            {
              id: 22,
              name: "Hybrid System 3kW",
              price: 85000,
              rating: 4.9,
              reviews: 34,
              specs: ["3kW Solar + Inverter", "Complete System", "5-Year Warranty", "Includes Installation"],
              features: ["Complete solution", "Plug and play", "Ready to use"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              badge: "Best Seller",
              category: "hybrid",
              subCategory: "Solar + Inverter",
              description: "Complete 3kW hybrid system with solar panels and inverter - everything you need for solar power.",
              fullSpecs: [
                { label: "System Size", value: "3kW" },
                { label: "Solar Panels", value: "8 x 375W" },
                { label: "Inverter Type", value: "Hybrid" },
                { label: "Warranty", value: "5 Years" },
                { label: "Installation", value: "Included" },
                { label: "Annual Generation", value: "4,500 kWh" },
                { label: "CO2 Savings", value: "3.2 tons/year" },
                { label: "Roof Space", value: "25 sq.m" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            },
            {
              id: 23,
              name: "Hybrid System 5kW",
              price: 125000,
              rating: 4.9,
              reviews: 28,
              specs: ["5kW Solar + Inverter", "Complete System", "5-Year Warranty", "Includes Installation"],
              features: ["Full system", "Premium quality", "Energy efficient"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              badge: "Popular",
              category: "hybrid",
              subCategory: "Solar + Inverter",
              description: "Complete 5kW hybrid solar system with premium components and professional installation.",
              fullSpecs: [
                { label: "System Size", value: "5kW" },
                { label: "Solar Panels", value: "14 x 375W" },
                { label: "Inverter Type", value: "Hybrid" },
                { label: "Warranty", value: "5 Years" },
                { label: "Installation", value: "Included" },
                { label: "Annual Generation", value: "7,500 kWh" },
                { label: "CO2 Savings", value: "5.3 tons/year" },
                { label: "Roof Space", value: "42 sq.m" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            }
          ]
        },
        {
          name: "Solar + Battery",
          items: [
            {
              id: 24,
              name: "Solar System with Battery 2kW",
              price: 95000,
              rating: 4.8,
              reviews: 23,
              specs: ["2kW Solar + Battery", "Complete System", "5-Year Warranty", "Includes Installation"],
              features: ["Complete solution", "Energy storage", "Efficient"],
              image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
              category: "hybrid",
              subCategory: "Solar + Battery",
              description: "Complete 2kW solar system with battery storage for 24/7 power availability.",
              fullSpecs: [
                { label: "System Size", value: "2kW" },
                { label: "Solar Panels", value: "5 x 400W" },
                { label: "Battery", value: "5kWh Lithium" },
                { label: "Warranty", value: "5 Years" },
                { label: "Installation", value: "Included" },
                { label: "Annual Generation", value: "3,000 kWh" },
                { label: "Backup Time", value: "3-4 Hours" },
                { label: "Roof Space", value: "15 sq.m" }
              ],
              images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
              ]
            }
          ]
        }
      ]
    }
  };

  // Get all products function
  const getAllProducts = () => {
    let allProducts = [];
    Object.values(products).forEach(category => {
      category.subCategories.forEach(sub => {
        allProducts = [...allProducts, ...sub.items];
      });
    });
    return allProducts;
  };

  // Apply all filters
  const applyFilters = () => {
    let result = getAllProducts();

    if (activeCategory !== "all") {
      result = result.filter(item => item.category === activeCategory);
    }

    if (activeSubCategory !== "all") {
      result = result.filter(item => item.subCategory === activeSubCategory);
    }

    result = result.filter(item => item.price <= priceRange);

    if (selectedTag !== "all") {
      if (selectedTag === "Best Seller") {
        result = result.filter(item => item.badge === "Best Seller");
      } else if (selectedTag === "Popular") {
        result = result.filter(item => item.badge === "Popular");
      } else if (selectedTag === "New") {
        result = result.filter(item => item.badge === "New");
      } else if (selectedTag === "Budget") {
        result = result.filter(item => item.price <= 10000);
      } else if (selectedTag === "Premium") {
        result = result.filter(item => item.price >= 50000);
      } else if (selectedTag === "Heavy Duty") {
        result = result.filter(item => item.specs.some(spec => spec.includes("Heavy") || spec.includes("Industrial")));
      }
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  };

  // Update filtered products
  useEffect(() => {
    const filtered = applyFilters();
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [activeCategory, activeSubCategory, priceRange, selectedTag, sortBy]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open product detail modal
  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close product detail modal
  const closeProductDetail = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  // Get category name
  const getCategoryName = () => {
    if (activeCategory === "all") return "All Products";
    return products[activeCategory]?.name || "Products";
  };

  // Get sub-categories for sidebar
  const getSubCategories = () => {
    if (activeCategory === "all") return [];
    const category = products[activeCategory];
    return category ? category.subCategories : [];
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveCategory("all");
    setActiveSubCategory("all");
    setPriceRange(150000);
    setSelectedTag("all");
    setSortBy("popularity");
  };

  // Handle tag click
  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag("all");
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <>
      <Navbar />
      <main className="products-page">
        {/* Hero Section */}
        <section className="products-hero">
          <div className="products-container">
            <div className="products-hero-content">
              <h1>Our Products</h1>
              <p>
                Premium quality solar panels, inverters, batteries, generators, 
                and hybrid systems for all your power needs
              </p>
            </div>
          </div>
        </section>

        {/* Products Section with Sidebar */}
        <section className="products-main">
          <div className="products-container">
            <div className="products-layout">
              {/* Sidebar */}
              <aside className="products-sidebar">
                <div className="products-sidebar-header">
                  <h3>Categories</h3>
                  <span className="products-count">{filteredProducts.length} Products</span>
                </div>

                <div className="products-sidebar-categories">
                  <button 
                    className={`products-category-btn ${activeCategory === "all" ? "active" : ""}`}
                    onClick={() => { setActiveCategory("all"); setActiveSubCategory("all"); }}
                  >
                    <span>📦</span>
                    All Products
                    <span className="products-category-count">{getAllProducts().length}</span>
                  </button>
                  
                  {Object.entries(products).map(([key, category]) => {
                    let count = 0;
                    category.subCategories.forEach(sub => {
                      count += sub.items.length;
                    });
                    return (
                      <button 
                        key={key}
                        className={`products-category-btn ${activeCategory === key ? "active" : ""}`}
                        onClick={() => { setActiveCategory(key); setActiveSubCategory("all"); }}
                      >
                        <span>{category.icon}</span>
                        {category.name}
                        <span className="products-category-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                {activeCategory !== "all" && (
                  <div className="products-sidebar-subcategories">
                    <h4>Sub Categories</h4>
                    <button 
                      className={`products-subcategory-btn ${activeSubCategory === "all" ? "active" : ""}`}
                      onClick={() => setActiveSubCategory("all")}
                    >
                      All {products[activeCategory]?.name}
                    </button>
                    {getSubCategories().map(sub => (
                      <button 
                        key={sub.name}
                        className={`products-subcategory-btn ${activeSubCategory === sub.name ? "active" : ""}`}
                        onClick={() => setActiveSubCategory(sub.name)}
                      >
                        {sub.name}
                        <span className="products-subcategory-count">{sub.items.length}</span>
                      </button>
                    ))}
                  </div>
                )}

                <div className="products-sidebar-filter">
                  <h4>Filter by Price</h4>
                  <div className="products-price-range">
                    <input 
                      type="range" 
                      min="5000" 
                      max="150000" 
                      step="1000" 
                      value={priceRange}
                      onChange={(e) => setPriceRange(Number(e.target.value))}
                    />
                    <div className="products-price-labels">
                      <span>₹5,000</span>
                      <span>₹{priceRange.toLocaleString()}</span>
                      <span>₹1,50,000</span>
                    </div>
                  </div>
                </div>

                <div className="products-sidebar-tags">
                  <h4>Popular Tags</h4>
                  <div className="products-tags">
                    <span 
                      className={`products-tag ${selectedTag === "Best Seller" ? "active" : ""}`}
                      onClick={() => handleTagClick("Best Seller")}
                    >
                      Best Seller
                    </span>
                    <span 
                      className={`products-tag ${selectedTag === "New" ? "active" : ""}`}
                      onClick={() => handleTagClick("New")}
                    >
                      New
                    </span>
                    <span 
                      className={`products-tag ${selectedTag === "Popular" ? "active" : ""}`}
                      onClick={() => handleTagClick("Popular")}
                    >
                      Popular
                    </span>
                    <span 
                      className={`products-tag ${selectedTag === "Premium" ? "active" : ""}`}
                      onClick={() => handleTagClick("Premium")}
                    >
                      Premium
                    </span>
                    <span 
                      className={`products-tag ${selectedTag === "Budget" ? "active" : ""}`}
                      onClick={() => handleTagClick("Budget")}
                    >
                      Budget
                    </span>
                    <span 
                      className={`products-tag ${selectedTag === "Heavy Duty" ? "active" : ""}`}
                      onClick={() => handleTagClick("Heavy Duty")}
                    >
                      Heavy Duty
                    </span>
                  </div>
                </div>

                {(activeCategory !== "all" || activeSubCategory !== "all" || selectedTag !== "all" || priceRange < 150000) && (
                  <button className="products-clear-filters" onClick={clearFilters}>
                    Clear All Filters ✕
                  </button>
                )}

                <div className="products-sidebar-contact">
                  <h4>Need Help?</h4>
                  <p>Our experts are here to help you choose the right product</p>
                  <button className="products-sidebar-contact-btn" onClick={() => window.location.href = "/contact"}>
                    Call Now
                  </button>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="products-content">
                <div className="products-header">
                  <div>
                    <h2>{getCategoryName()}</h2>
                    <p className="products-header-sub">{filteredProducts.length} products available</p>
                  </div>
                  <div className="products-sort">
                    <label>Sort by:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                      <option value="popularity">Popularity</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Rating</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="products-empty">
                    <span>🔍</span>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search for different products</p>
                    <button className="products-empty-btn" onClick={clearFilters}>
                      Clear All Filters
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="products-grid">
                      {currentProducts.map(product => (
                        <div className="products-card" key={product.id} onClick={() => openProductDetail(product)} style={{ cursor: 'pointer' }}>
                          {product.badge && (
                            <span className={`products-badge products-badge-${product.badge.toLowerCase().replace(' ', '-')}`}>
                              {product.badge}
                            </span>
                          )}
                          <div className="products-card-image">
                            <img src={product.image} alt={product.name} />
                            <div className="products-card-actions">
                              <button className="products-card-action" onClick={(e) => { e.stopPropagation(); alert('Added to wishlist!'); }} title="Add to Wishlist">❤️</button>
                              <button className="products-card-action" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }} title="Quick View">🔍</button>
                              <button className="products-card-action" onClick={(e) => { e.stopPropagation(); alert('Added to compare!'); }} title="Compare">🔄</button>
                            </div>
                          </div>
                          <div className="products-card-body">
                            <h3 className="products-card-title">{product.name}</h3>
                            <div className="products-card-rating">
                              <span className="products-stars">
                                {'⭐'.repeat(Math.floor(product.rating))}
                                {product.rating % 1 >= 0.5 ? '⭐' : ''}
                              </span>
                              <span className="products-rating-text">{product.rating} ({product.reviews} reviews)</span>
                            </div>
                            <div className="products-card-specs">
                              {product.specs.map((spec, index) => (
                                <span key={index} className="products-spec">{spec}</span>
                              ))}
                            </div>
                            <div className="products-card-features">
                              {product.features.map((feature, index) => (
                                <span key={index} className="products-feature">✓ {feature}</span>
                              ))}
                            </div>
                            <div className="products-card-footer">
                              <span className="products-price">₹{product.price.toLocaleString()}</span>
                              <div className="products-card-buttons">
                                <button className="products-card-add" onClick={(e) => { e.stopPropagation(); alert(`Added ${product.name} to cart!`); }}>
                                  Add to Cart
                                </button>
                                <button className="products-card-view" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>
                                  View
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="products-pagination">
                        <button 
                          className="products-pagination-btn"
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                        
                        {[...Array(totalPages)].map((_, index) => {
                          const pageNumber = index + 1;
                          if (
                            pageNumber === 1 ||
                            pageNumber === totalPages ||
                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                          ) {
                            return (
                              <button
                                key={pageNumber}
                                className={`products-pagination-btn ${currentPage === pageNumber ? "active" : ""}`}
                                onClick={() => paginate(pageNumber)}
                              >
                                {pageNumber}
                              </button>
                            );
                          } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                            return <span key={pageNumber} className="products-pagination-dots">...</span>;
                          }
                          return null;
                        })}
                        
                        <button 
                          className="products-pagination-btn"
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product Detail Modal */}
        {isModalOpen && selectedProduct && (
          <div className="products-modal-overlay" onClick={closeProductDetail}>
            <div className="products-modal" onClick={(e) => e.stopPropagation()}>
              <button className="products-modal-close" onClick={closeProductDetail}>✕</button>
              
              <div className="products-modal-content">
                <div className="products-modal-left">
                  <div className="products-modal-image-main">
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                  </div>
                  <div className="products-modal-thumbnails">
                    {selectedProduct.images && selectedProduct.images.map((img, index) => (
                      <img key={index} src={img} alt={`${selectedProduct.name} ${index + 1}`} />
                    ))}
                    {(!selectedProduct.images || selectedProduct.images.length === 0) && (
                      <>
                        <img src={selectedProduct.image} alt="Product view 1" />
                        <img src={selectedProduct.image} alt="Product view 2" />
                        <img src={selectedProduct.image} alt="Product view 3" />
                      </>
                    )}
                  </div>
                </div>
                
                <div className="products-modal-right">
                  {selectedProduct.badge && (
                    <span className={`products-modal-badge products-badge-${selectedProduct.badge.toLowerCase().replace(' ', '-')}`}>
                      {selectedProduct.badge}
                    </span>
                  )}
                  <h2 className="products-modal-title">{selectedProduct.name}</h2>
                  
                  <div className="products-modal-rating">
                    <span className="products-stars">
                      {'⭐'.repeat(Math.floor(selectedProduct.rating))}
                      {selectedProduct.rating % 1 >= 0.5 ? '⭐' : ''}
                    </span>
                    <span className="products-rating-text">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                  </div>
                  
                  <div className="products-modal-price">
                    ₹{selectedProduct.price.toLocaleString()}
                  </div>
                  
                  <p className="products-modal-description">{selectedProduct.description}</p>
                  
                  <div className="products-modal-specs">
                    <h4>Technical Specifications</h4>
                    <div className="products-modal-specs-grid">
                      {selectedProduct.fullSpecs && selectedProduct.fullSpecs.map((spec, index) => (
                        <div key={index} className="products-modal-spec-item">
                          <span className="products-modal-spec-label">{spec.label}</span>
                          <span className="products-modal-spec-value">{spec.value}</span>
                        </div>
                      ))}
                      {(!selectedProduct.fullSpecs || selectedProduct.fullSpecs.length === 0) && (
                        selectedProduct.specs.map((spec, index) => (
                          <div key={index} className="products-modal-spec-item">
                            <span className="products-modal-spec-label">Feature</span>
                            <span className="products-modal-spec-value">{spec}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  
                  <div className="products-modal-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="products-modal-actions">
                    <button className="products-modal-add-cart" onClick={() => alert(`Added ${selectedProduct.name} to cart!`)}>
                      Add to Cart
                    </button>
                    <button className="products-modal-buy" onClick={() => alert(`Proceeding to buy ${selectedProduct.name}`)}>
                      Buy Now
                    </button>
                  </div>
                  
                  <div className="products-modal-extra">
                    <div className="products-modal-extra-item">
                      <span>🚚</span>
                      <div>
                        <strong>Free Delivery</strong>
                        <p>On orders above ₹50,000</p>
                      </div>
                    </div>
                    <div className="products-modal-extra-item">
                      <span>🔄</span>
                      <div>
                        <strong>7-Day Return</strong>
                        <p>Hassle-free returns policy</p>
                      </div>
                    </div>
                    <div className="products-modal-extra-item">
                      <span>🛡️</span>
                      <div>
                        <strong>Warranty</strong>
                        <p>Full manufacturer warranty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Products;