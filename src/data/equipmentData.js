export const equipmentData = {
  facilitySpecs: {
    totalArea: "8,500 Square Feet",
    construction: "RCC Constructed Building with Kota Stone Flooring",
    cleanliness: "Dust- & Insect-Free Controlled Environment with Ducted Air Conditioning",
    walls: "Panel-Covered Industrial Production Walls with Anti-Microbial Paint",
    location: "Khasra No. 323MI, Ground Floor, Central Hope Town, Camp Road, Industrial Area Selaqui, Dehradun"
  },
  productionEquipment: [
    {
      id: "FM.PD.PM.004",
      name: "Foil Printing Machine 5 Colour (2 + 3 Colour)",
      type: "High-Speed Rotogravure Printing Press",
      purpose: "Precision multi-colour foil printing with front & reverse registration capability for high-volume pharmaceutical packaging runs.",
      features: "Dual web tension control, high-efficiency hot air drying tunnels, doctor blade system, pinhole-free handling"
    },
    {
      id: "FM.PD.PM.002",
      name: "Foil Printing Machine 4 Colour",
      type: "Rotogravure Printing Press",
      purpose: "Versatile 4-colour printing for blister lidding foil, strip foil, and paper-aluminium laminates.",
      features: "Strobe inspection light, accurate color registration, variable speed inverter drive"
    },
    {
      id: "FM.PD.PM.003",
      name: "Foil Printing Machine 3 Colour",
      type: "Rotogravure Printing Press",
      purpose: "Dedicated 2/3-colour pharma brand runs, caution printing, and repeat standard orders.",
      features: "Quick job-changeover, uniform ink circulation, fine impression rollers"
    },
    {
      id: "FM.PD.RM.004",
      name: "Precision Rewinding & Slitting Machine",
      type: "Slitting & Inspection System",
      purpose: "High-accuracy slitting of printed jumbo foil rolls into customer-specified widths and core sizes.",
      features: "Razor-sharp shear blades, edge-guide web alignment, strobe surface inspection"
    },
    {
      id: "FM.PD.CM.001",
      name: "Automatic Core Cutting Machine",
      type: "Core Preparation",
      purpose: "Clean, burr-free cutting of paper cores to exact roll widths without dust generation.",
      features: "Multi-blade cutting mechanism, dust extraction unit, clean cut edges"
    },
    {
      id: "FM.PD.WB.005",
      name: "Production Area 250 Kg Heavy-Duty Balance",
      type: "Industrial Weighing",
      purpose: "Accurate weighing of input raw material master coils and finished roll dispatches.",
      features: "Calibrated load cell, tare compensation, digital display"
    },
    {
      id: "FM.PD.DAC.001 / DAC.002",
      name: "Ductable Air Conditioning Systems (Unit I & II)",
      type: "Climate Control",
      purpose: "Maintains optimal relative humidity (RH) and ambient temperature in printing and slitting halls.",
      features: "HEPA air filtration, positive pressure airflow, prevents moisture condensation on bare aluminium"
    }
  ],
  qcLaboratoryEquipment: [
    {
      id: "FM.QA.PT.002",
      name: "Precision Pinholes Tester",
      category: "Zero-Defect Barrier Integrity",
      purpose: "High-intensity optical inspection detecting microscopic pinholes in raw and converted aluminium foils.",
      standard: "Ensures 100% pinhole-free foil as mandated for pharmaceutical moisture barrier"
    },
    {
      id: "FM.QA.BS.001",
      name: "Digital Bursting Strength Tester",
      category: "Mechanical Resistance",
      purpose: "Measures hydrostatic bursting pressure of aluminium foils, laminates, and blister lidding substrates.",
      standard: "Guarantees foil withstands high-speed blister sealing and push-through resistance"
    },
    {
      id: "FM.QA.VF.003",
      name: "Viscosity Flow Cup (B4 Cup)",
      category: "Chemical & Coating Quality",
      purpose: "Measures exact efflux time and viscosity of printing inks, primers, and heat-seal lacquers (VMCH).",
      standard: "Ensures uniform GSM coating thickness across the entire roll width"
    },
    {
      id: "FM.QC.WB.001",
      name: "Analytical QC 500g Precision Balance",
      category: "GSM & Coating Weight Verification",
      purpose: "High-precision weighing (0.001g sensitivity) used for lacquer GSM determination and substrate verification.",
      standard: "Conforms to pharmacopoeial sampling standards for weight per unit area"
    }
  ],
  dispatchProtocols: [
    {
      step: "1. COA Release",
      desc: "Every batch is analyzed & approved by QC with an official Certificate of Analysis (COA) prior to dispatch."
    },
    {
      step: "2. Edge Protection",
      desc: "Every foil roll is fitted with heavy-duty corner roll protectors to prevent transit damage to roll edges."
    },
    {
      step: "3. Heat Shrink Wrapping",
      desc: "Hermetic shrink-wrap packaging protects rolls against humidity, dust, and temperature fluctuations."
    },
    {
      step: "4. Corrugated Shipper Boxing",
      desc: "Rolls are packed in dimensioned master shippers secured with heavy-duty industrial strapping."
    },
    {
      step: "5. Computerized Batch Traceability",
      desc: "Inner core labels and outer shippers bear computerized batch numbers, net/gross weight, and QC stamp."
    }
  ]
};
