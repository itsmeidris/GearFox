
function Uploader() {
  return (
    <>
      <div
        className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6"
        id="dropzone"
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 z-50"
        />
        <div className="text-center">
          <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt=""
          />

         
            
          <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>

        <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
      </div>
    </>
  );
}

export default Uploader;
