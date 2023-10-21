import React, { useState }  from "react";
import "./FAQ.css";
import FAQ from "./FAQ";

const FAQS = () => {
    const [faqs, setFaqs] = useState([
        {
          question: 'Understanding company billing and accounts',
          answer: 'hjsdhjadhjdajhdhjjdshjhsdfhjsfjhjsfhjsfhjhfshjfshjfhfdhfhfhfhgfhgfgfhgfjjjkhfmh,hbhhbmmff,fmmgfmgf,,mhfmmgfg,,,mgfgmmgfmkmgff,,mgfmgf,mmgfmmgfk,,fgmgmfgm,,mgfmjgf,gfmmjf,,gf,mfggm,mfg,,gfmmgffg,,gfg,mgfg,,mgfgfmmgf,,,gfg,,,gf,mgfmmgf,fgmmgfm,gfmmgf,,gfmgf,,m,fgm,gf,m,mgf,mfgmmmf,gfmfgm',
          open: true
        },
        {
          question: 'Updating your billing and credit card',
          answer: 'hjsdhjadhjdajhdhjjdshjhsdfhjsfjhjsfhjsfhjhfshjfshjfhfdhfhfhfhgfhgfgfhgfjjjkhfmh,hbhhbmmff,fmmgfmgf,,mhfmmgfg,,,mgfgmmgfmkmgff,,mgfmgf,mmgfmmgfk,,fgmgmfgm,,mgfmjgf,gfmmjf,,gf,mfggm,mfg,,gfmmgffg,,gfg,mgfg,,mgfgfmmgf,,,gfg,,,gf,mgfmmgf,fgmmgfm,gfmmgf,,gfmgf,,m,fgm,gf,m,mgf,mfgmmmf,gfmfgm',
          open: false
        },
        {
          question: 'Application keyboard shortcuts and tips',
          answer: 'hjsdhjadhjdajhdhjjdshjhsdfhjsfjhjsfhjsfhjhfshjfshjfhfdhfhfhfhgfhgfgfhgfjjjkhfmh,hbhhbmmff,fmmgfmgf,,mhfmmgfg,,,mgfgmmgfmkmgff,,mgfmgf,mmgfmmgfk,,fgmgmfgm,,mgfmjgf,gfmmjf,,gf,mfggm,mfg,,gfmmgffg,,gfg,mgfg,,mgfgfmmgf,,,gfg,,,gf,mgfmmgf,fgmmgfm,gfmmgf,,gfmgf,,m,fgm,gf,m,mgf,mfgmmmf,gfmfgm',
          open: false
        },
        {
          question: 'Cancelling a website subscription',
          answer: 'hjsdhjadhjdajhdhjjdshjhsdfhjsfjhjsfhjsfhjhfshjfshjfhfdhfhfhfhgfhgfgfhgfjjjkhfmh,hbhhbmmff,fmmgfmgf,,mhfmmgfg,,,mgfgmmgfmkmgff,,mgfmgf,mmgfmmgfk,,fgmgmfgm,,mgfmjgf,gfmmjf,,gf,mfggm,mfg,,gfmmgffg,,gfg,mgfg,,mgfgfmmgf,,,gfg,,,gf,mgfmmgf,fgmmgfm,gfmmgf,,gfmgf,,m,fgm,gf,m,mgf,mfgmmmf,gfmfgm',
          open: false
        }
    ])
      
    const toggleFaq = index => {
        setFaqs(
            faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else  {
                faq.open = false;
            }
        
            return faq;
            })
        )
    }

    return (
      <div className='faqs'>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFaq={toggleFaq} />
        ))}  
      </div>
    )
}

export default FAQS;