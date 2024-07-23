"use client"
import Image from "next/image"

const DownloadButton = () => {
    
    const cv = "https://vict360.github.io/CV_Victor_Vargas.pdf"

    const download_cv = (url:any)=>{
      const filename = url.split("/").pop()
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download", filename);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    }
    
    return ( 
        <div className="">
        <div className="p-4 sm:p-4 rounded-full pr-4 pl-4 bg-slate-300 text-black hover:bg-slate-100 w-44 transition delay-150 duration-200 ease-in-out hover:scale-110">
          <div className="flex flex-row gap-2 justify-center flex-wrap">
            <div onClick={()=>download_cv(cv)}>
              <p className="text-sm">Download CV</p>
            </div>
            <div className="self-center">
              <Image
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="./download.svg"
              alt="Next.js Logo"
              width={20}
              height={20}
              priority
              />
            </div>
          </div>
        </div>

      </div>
     );
}
 
export default DownloadButton;