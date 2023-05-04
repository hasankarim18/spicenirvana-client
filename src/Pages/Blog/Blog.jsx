/* eslint-disable react/no-unescaped-entities */
import { PDFDownloadLink } from "@react-pdf/renderer";


import Four from "./Four";
import One from "./One";
import Three from "./Three";
import Two from "./Two";
import PdfFile from "./PdfFile";







// ReactPDF.renderToStream(<MyDocument />);


const Blog = () => {
  
    
    return (
      <div>
        <div className="py-4 text-center">
          <PDFDownloadLink document={<PdfFile />} fileName="somename.pdf">
            {({  loading }) =>
              loading ? (
                <button className="btn">Loading document...</button>
              ) : (
                <button className="btn">Download</button>
              )
            }
          </PDFDownloadLink>
        </div>
        <div>
          <One />
          <div className="my-8">
            <hr />
          </div>
          <Two />
          <div className="my-8">
            <hr />
          </div>
          <Three />
          <div className="my-8">
            <hr />
          </div>
          <Four />
        </div>
      </div>
    );
};

export default Blog;