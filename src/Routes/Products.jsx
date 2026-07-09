import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsPerPage = 6;

  // Product Data
  const products = {
    
  "voltage": {
    "name": "Voltage Stabilizers",
    "icon": "⚡",
    "subCategories": [
      {
        "name": "Servo Voltage Stabilizers",
        "items": [
          {
            "id": 1,
            "name": "Single Phase Servo Voltage Stabilizer",
            "price": 40000,
            "oldPrice": 55000,
            "rating": 4.8,
            "reviews": 234,
            "specs": [
              "1 KVA – 150 KVA Capacity",
              "140V – 270V AC Input",
              "230V ±1% Output",
              "50Hz ±10% Input Frequency"
            ],
            "features": [
              "Automatic voltage correction",
              "Indoor installation",
              "High & Low voltage cut-off",
              "Bypass switch",
              "Low maintenance",
              "Precision voltage regulation",
              "Reliable performance",
              "Suitable for continuous operation"
            ],
            "image": "https://res.cloudinary.com/dvjpc8yfu/image/upload/v1783581054/file_000000007058720987094cd123eb0306_n895xj.png",
            "badge": "Best Seller",
            "category": "voltage",
            "subCategory": "Servo Voltage Stabilizers",
            "description": "Best Electric Single Phase Servo Voltage Stabilizer is specially designed for continuous indoor use. It automatically maintains constant output voltage even when input voltage fluctuates.",
            "fullSpecs": [
              { "label": "Capacity", "value": "1 KVA – 150 KVA" },
              { "label": "Input Voltage", "value": "140V – 270V AC" },
              { "label": "Output Voltage", "value": "230V ±1%" },
              { "label": "Input Frequency", "value": "50Hz ±10%" },
              { "label": "Output Frequency", "value": "50Hz ±1%" },
              { "label": "Output Waveform", "value": "Quasi Sine Wave" },
              { "label": "Cut-Off", "value": "High & Low Output Side with Bypass" }
            ],
            "images": [
              "https://res.cloudinary.com/dvjpc8yfu/image/upload/v1783581054/file_000000007058720987094cd123eb0306_n895xj.png",
              "https://res.cloudinary.com/dvjpc8yfu/image/upload/v1783581054/file_000000007058720987094cd123eb0306_n895xj.png"
            ]
          },
          {
            "id": 2,
            "name": "Three Phase Servo Voltage Stabilizer",
            "price": 85000,
            "oldPrice": 110000,
            "rating": 4.7,
            "reviews": 189,
            "specs": [
              "3 KVA – 2000 KVA Capacity",
              "300V – 470V AC Input",
              "415V ±5% Output",
              "50Hz ±10% Input Frequency"
            ],
            "features": [
              "Three phase voltage correction",
              "Heavy duty industrial design",
              "High & Low voltage protection",
              "Indoor installation",
              "Continuous operation",
              "Low maintenance"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhz0Mq7lVA4Pu0GTI_t5SgMTVBqSCdywJuKXJ9m8k1g&s=10",
            "badge": "Industrial",
            "category": "voltage",
            "subCategory": "Servo Voltage Stabilizers",
            "description": "Designed for industrial applications, the Three Phase Servo Voltage Stabilizer automatically regulates fluctuating voltage and delivers balanced output for heavy electrical equipment.",
            "fullSpecs": [
              { "label": "Capacity", "value": "3 KVA – 2000 KVA" },
              { "label": "Input Voltage", "value": "300V – 470V AC" },
              { "label": "Output Voltage", "value": "415V ±5%" },
              { "label": "Input Frequency", "value": "50Hz ±10%" },
              { "label": "Output Frequency", "value": "50Hz ±1%" },
              { "label": "Output Waveform", "value": "Quasi Sine Wave" },
              { "label": "DC Voltage", "value": "12V / 24V / 48V" },
              { "label": "Cut-Off", "value": "High & Low Output Side with Bypass" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVDk4GWS_lUth-TPiWBaH4sT1AncxahoM50GZ-J_tSA&s=10",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KhoP4wSPf8bq7ILHXR2uqX5zGHUW8VLuhcO-lfme6g&s=10"
            ]
          }
        ]
      },
      {
        "name": "Automatic Voltage Stabilizers",
        "items": [
          {
            "id": 3,
            "name": "Automatic Voltage Stabilizer",
            "price": 12000,
            "oldPrice": 16000,
            "rating": 4.5,
            "reviews": 312,
            "specs": [
              "1 KVA – 7 KVA Capacity",
              "90V – 280V AC Input",
              "200V – 240V ±10% Output",
              "Sine Wave Output"
            ],
            "features": [
              "Automatic voltage correction",
              "Fast response",
              "Compact design",
              "Energy efficient",
              "Low maintenance",
              "Suitable for home & commercial use"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hf_v2sUO9USGUCAxcX6q8sHaMtzTbYJTTheZiGOlWg&s=10",
            "badge": "",
            "category": "voltage",
            "subCategory": "Automatic Voltage Stabilizers",
            "description": "Automatic Voltage Stabilizer maintains proper voltage for domestic and commercial appliances like refrigerators, televisions, air conditioners, pumps and lighting systems.",
            "fullSpecs": [
              { "label": "Capacity", "value": "1 KVA, 2 KVA, 3 KVA, 5 KVA, 7 KVA" },
              { "label": "Input Voltage", "value": "90V – 280V AC" },
              { "label": "Output Voltage", "value": "200V – 240V ±10%" },
              { "label": "Input Frequency", "value": "50Hz ±10%" },
              { "label": "Output Frequency", "value": "50Hz ±1%" },
              { "label": "Output Waveform", "value": "Sine Wave" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlP4KwRcblkmocUmEa2W-Bkguv2-Y7GKoIRANExVayg&s=10",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHI0PEOItWeC3nUBLhlnDrxT2sRlaOqtkAuGu-UPNJFg&s=10"
            ]
          }
        ]
      }
    ]
  },
  "ups": {
    "name": "UPS Systems",
    "icon": "🔌",
    "subCategories": [
      {
        "name": "Online UPS",
        "items": [
          {
            "id": 4,
            "name": "Online UPS System",
            "price": 55000,
            "oldPrice": 70000,
            "rating": 4.9,
            "reviews": 156,
            "specs": [
              "1 KVA – 50 KVA Capacity",
              "180V – 270V AC Input",
              "230V AC Output",
              "Zero Transfer Time"
            ],
            "features": [
              "True Online Technology",
              "Zero transfer time",
              "Pure sine wave output",
              "Battery charging system",
              "Reliable backup",
              "High efficiency"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzoj4alIJSj0Xz9LyAlaeoDVTeV2T2tP4C9mNbtDdnA&s=10",
            "badge": "Premium",
            "category": "ups",
            "subCategory": "Online UPS",
            "description": "Best Electric Online UPS provides uninterrupted power with zero transfer time. It continuously supplies power through the inverter while charging batteries simultaneously.",
            "fullSpecs": [
              { "label": "Capacity", "value": "1 KVA – 50 KVA" },
              { "label": "Input Voltage", "value": "180V – 270V AC" },
              { "label": "Output Voltage", "value": "230V AC" },
              { "label": "Input Frequency", "value": "50Hz ±10%" },
              { "label": "Output Frequency", "value": "50Hz ±1%" },
              { "label": "Output Waveform", "value": "Sine Wave" },
              { "label": "Backup Time", "value": "10–30 Minutes" },
              { "label": "DC Voltage", "value": "96V / 120V / 180V / 360V DC" },
              { "label": "Indicators", "value": "Mains, Charging, UPS ON, Battery Low" },
              { "label": "Alarms", "value": "Mains Fail, Battery Low" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPk6ERCRVco8wQPWLbkQttA8q9wPkpjzMvq0L9UloAA&s=10",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxwiwXJAYPGcyr8FC9zkO-4kKCE401ry5BeyEggNnMQ&s=10"
            ]
          }
        ]
      },
      {
        "name": "Offline UPS",
        "items": [
          {
            "id": 5,
            "name": "Offline UPS System",
            "price": 8500,
            "oldPrice": 12000,
            "rating": 4.3,
            "reviews": 423,
            "specs": [
              "500VA – 2000VA Capacity",
              "180V – 270V AC Input",
              "220V – 240V AC Output",
              "4 ms Transfer Time"
            ],
            "features": [
              "Automatic battery switching",
              "Fast transfer time",
              "PWM & MOSFET Technology",
              "Quasi sine wave output",
              "Battery protection",
              "Reliable backup"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiU5RW8CZ3kZ60_RBHnGFVim2Jw3v_Ngct3r9s7Zil9g&s=10",
            "badge": "",
            "category": "ups",
            "subCategory": "Offline UPS",
            "description": "Offline UPS automatically switches to battery during power failure and protects equipment against voltage fluctuations.",
            "fullSpecs": [
              { "label": "Capacity", "value": "500VA, 800VA, 1250VA, 1600VA, 2000VA" },
              { "label": "Input Voltage", "value": "180V – 270V AC" },
              { "label": "Output Voltage", "value": "220V – 240V AC" },
              { "label": "Input Frequency", "value": "50Hz ±10%" },
              { "label": "Output Frequency", "value": "50Hz ±1%" },
              { "label": "Transfer Time", "value": "4 ms" },
              { "label": "Backup Time", "value": "10–30 Minutes" },
              { "label": "Output Waveform", "value": "Quasi Sine Wave" },
              { "label": "DC Voltage", "value": "12V / 24V / 48V" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RZtUwgz5uzhiAkHWw87EOtcEni72yJsnXR1UibUqVA&s=10",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wt30nwzcL-qg_98nvJDakFi3I3DLE16DerGCDBKeyA&s=10"
            ]
          }
        ]
      }
    ]
  },
  "inverters": {
    "name": "Inverters",
    "icon": "🔄",
    "subCategories": [
      {
        "name": "Sine Wave Inverters",
        "items": [
          {
            "id": 6,
            "name": "Sine Wave Inverter",
            "price": 15000,
            "oldPrice": 22000,
            "rating": 4.6,
            "reviews": 278,
            "specs": [
              "300VA – 1000 KVA Capacity",
              "230V AC Input",
              "230V AC Output",
              "50Hz ±1% Output Frequency"
            ],
            "features": [
              "PWM Technology",
              "Constant Voltage & Current Charging",
              "Fully Automatic",
              "Low Maintenance",
              "Silent Operation",
              "Pollution Free",
              "Indoor Installation",
              "Auto Reset",
              "Battery Protection",
              "Overload Protection",
              "Short Circuit Protection"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaelaIMm8Otu3KZG3OVkNr12byouthjBJ0HqiFNVRtBA&s=10",
            "badge": "Best Seller",
            "category": "inverters",
            "subCategory": "Sine Wave Inverters",
            "description": "Best Electric Sine Wave Inverter provides uninterrupted backup power for homes, hospitals and commercial establishments. It converts DC power into AC power with automatic charging and overload protection.",
            "fullSpecs": [
              { "label": "Capacity", "value": "300VA – 1000 KVA" },
              { "label": "Input Voltage", "value": "230V AC" },
              { "label": "Output Voltage", "value": "230V AC" },
              { "label": "Input Frequency", "value": "50Hz ±10%" },
              { "label": "Output Frequency", "value": "50Hz ±1%" },
              { "label": "Output Waveform", "value": "Quasi Sine Wave" },
              { "label": "Protections", "value": "Battery Short Circuit, Overload, Low Battery, Over Charging" },
              { "label": "Indicators", "value": "Low Battery, Charging, Overload, Charged, Inverter ON, Mains ON" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0X9_wL_46GYmPQondpZ91iMqdzbqeyXVN8bj40F817g&s=10",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD344vh6xvzb780IKbzLcspta0gzHaJ9Ez2f7ga3OPFg&s=10"
            ]
          }
        ]
      }
    ]
  },
  "transformers": {
    "name": "Transformers",
    "icon": "⚡",
    "subCategories": [
      {
        "name": "Isolation Transformers",
        "items": [
          {
            "id": 7,
            "name": "Isolation Transformer",
            "price": 45000,
            "oldPrice": 60000,
            "rating": 4.7,
            "reviews": 167,
            "specs": [
              "1 KVA – 2000 KVA Capacity",
              "230V AC Input",
              "230V AC Output",
              "50Hz ±1% Output Frequency"
            ],
            "features": [
              "Complete electrical isolation",
              "Shock protection",
              "Heavy-duty construction",
              "Automatic operation",
              "Low maintenance",
              "Long service life"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiL4SrBz-9jNGX905M6VqqNMysGIgI7aXzfdn7CpK-g&s=10",
            "badge": "",
            "category": "transformers",
            "subCategory": "Isolation Transformers",
            "description": "Isolation Transformers electrically isolate the power input from the output to protect sensitive equipment from electrical noise and shocks.",
            "fullSpecs": [
              { "label": "Capacity", "value": "1 KVA – 2000 KVA" },
              { "label": "Input Voltage", "value": "230V AC" },
              { "label": "Output Voltage", "value": "230V AC" },
              { "label": "Input Frequency", "value": "50Hz ±10%" },
              { "label": "Output Frequency", "value": "50Hz ±1%" },
              { "label": "Output Waveform", "value": "Quasi Sine Wave" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxzM1ZyGTu9YSvoW9E3V6A3ViHzV0-_BA7cJuJjsZHg&s=10",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtk_orff7f5_t7-hXYSwApJPpLiIHOmMKlSoEurhgTXQ&s=10"
            ]
          }
        ]
      }
    ]
  },
  "power": {
    "name": "Power Solutions",
    "icon": "💡",
    "subCategories": [
      {
        "name": "Phase Correction",
        "items": [
          {
            "id": 8,
            "name": "Automatic Phase Sequence Corrector",
            "price": 25000,
            "oldPrice": 35000,
            "rating": 4.5,
            "reviews": 134,
            "specs": [
              "10 Amp – 1000 Amp Capacity",
              "340V – 480V AC Input",
              "340V – 480V AC Output",
              "50Hz ±1% Output Frequency"
            ],
            "features": [
              "Automatic phase correction",
              "Prevents motor damage",
              "Suitable for lifts & motors",
              "Industrial use",
              "Reliable operation",
              "Low maintenance"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxC2yXk_X7fSo2PhI-0DhO0S404ceAIlh50QkHW66kg&s=10",
            "badge": "Industrial",
            "category": "power",
            "subCategory": "Phase Correction",
            "description": "This device automatically corrects wrong phase sequence in three-phase supply, preventing equipment damage and reducing production downtime.",
            "fullSpecs": [
              { "label": "Capacity", "value": "10 Amp – 1000 Amp" },
              { "label": "Input Voltage", "value": "340V – 480V AC" },
              { "label": "Output Voltage", "value": "340V – 480V AC" },
              { "label": "Input Frequency", "value": "50Hz ±10%" },
              { "label": "Output Frequency", "value": "50Hz ±1%" },
              { "label": "Output Waveform", "value": "Quasi Sine Wave" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-nZ09ol3bltZ9YwQm-9jFYchxrbtvxFoaSGTP3Ykxg&s=10",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0RYuXodOlK32BDi1340d0n9DLcI31rcipTM7wg6IrQ&s=10"
            ]
          }
        ]
      },
      {
        "name": "Phase & Neutral Balancing",
        "items": [
          {
            "id": 9,
            "name": "Automatic Phase & Neutral Balancing System",
            "price": 125000,
            "oldPrice": 160000,
            "rating": 4.9,
            "reviews": 89,
            "specs": [
              "415V, 3 Phase + Neutral, 4 Wire",
              "50Hz ±5% Frequency",
              "Magnetic Symmetry Working",
              "Oil Cooled (ONAN)"
            ],
            "features": [
              "Equalizes phase voltage",
              "Reduces neutral current",
              "Generates third phase if one phase fails",
              "Prevents neutral failure hazards",
              "Energy saving",
              "Digital monitoring",
              "Overload protection",
              "Short circuit protection"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ArG-0dz2mNrGCmJNPmfP3EnBmaCnnh8HOvxb9JSqhA&s",
            "badge": "Premium",
            "category": "power",
            "subCategory": "Phase & Neutral Balancing",
            "description": "The Automatic Phase & Neutral Balancing System improves power quality by balancing phase voltages, reducing neutral current and protecting sensitive electrical equipment.",
            "fullSpecs": [
              { "label": "Input Supply", "value": "415V, 3 Phase + Neutral, 4 Wire" },
              { "label": "Frequency", "value": "50Hz ±5%" },
              { "label": "Working Principle", "value": "Magnetic Symmetry" },
              { "label": "Phase Angle", "value": "Maintains 120°" },
              { "label": "Neutral Protection", "value": "Yes" },
              { "label": "Phase Equalization", "value": "Reduces imbalance by 40–60%" },
              { "label": "Third Phase Generation", "value": "Yes" },
              { "label": "Energy Saving", "value": "Yes" },
              { "label": "Overload Protection", "value": "MCCB/MCB" },
              { "label": "Neutral Current Protection", "value": "Yes" },
              { "label": "Display", "value": "Digital 7-Segment Auto Scanning (Voltage, Current & Frequency)" },
              { "label": "Cooling Type", "value": "Oil Cooled (ONAN)" },
              { "label": "Oil Moisture Protection", "value": "Silica Gel Breather" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlKI8_h6ksF-CHpoB837NmXalvBEUYHe5qMhJHnI3rA&s=10",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8dOZmhKuitlS1Wu5xEs7vRr-uTar-WXGEOp19BKMNg&s=10"
            ]
          }
        ]
      }
    ]
  },
  "batteries": {
    "name": "Batteries",
    "icon": "🔋",
    "subCategories": [
      {
        "name": "Battery Range",
        "items": [
          {
            "id": 10,
            "name": "Battery Range",
            "price": 8000,
            "oldPrice": 12000,
            "rating": 4.4,
            "reviews": 567,
            "specs": [
              "12V 7Ah to 12V 200Ah",
              "SMF Batteries",
              "Tubular Batteries",
              "Exide & Amaron Dealer"
            ],
            "features": [
              "SMF Batteries",
              "Tubular Batteries",
              "Authorized dealer for Exide",
              "Authorized dealer for Amaron",
              "Deep discharge",
              "Long life"
            ],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZAd4sGqqgFMTENlall6iNUo7a5kxKiA08C3ODA-OvA&s=10",
            "badge": "",
            "category": "batteries",
            "subCategory": "Battery Range",
            "description": "Premium quality SMF and Tubular batteries for all UPS and inverter applications. Authorized dealer for Exide and Amaron.",
            "fullSpecs": [
              { "label": "Voltage Range", "value": "12V 7Ah to 12V 200Ah" },
              { "label": "Types", "value": "SMF Batteries, Tubular Batteries" },
              { "label": "Brands", "value": "Exide, Amaron" }
            ],
            "images": [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-N_eCkGqBV9LDT3V_NvTMHl8Cf3MMCYI9X0XeuDn4QQ&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHqHN0OjFkUO18tfqKQ8MeH3L4ZJ3E3tS7Wpr2u-9_g&s"
            ]
          }
        ]
      }
    ]
  }
}

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

    if (selectedTag !== "all") {
      if (selectedTag === "Best Seller") {
        result = result.filter(item => item.badge === "Best Seller");
      } else if (selectedTag === "Popular") {
        result = result.filter(item => item.badge === "Popular");
      } else if (selectedTag === "New") {
        result = result.filter(item => item.badge === "New");
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
  }, [activeCategory, activeSubCategory, selectedTag, sortBy]);

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
                Premium quality inverters, Stabilizer, transformer, batteries, generators, 
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
                      className={`products-tag ${selectedTag === "Heavy Duty" ? "active" : ""}`}
                      onClick={() => handleTagClick("Heavy Duty")}
                    >
                      Heavy Duty
                    </span>
                  </div>
                </div>

                {(activeCategory !== "all" || activeSubCategory !== "all" || selectedTag !== "all") && (
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
