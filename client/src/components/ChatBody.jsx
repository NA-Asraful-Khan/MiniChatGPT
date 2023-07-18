// import React from 'react'

const ChatBody = () => {
    const basicStyle = "border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]"

    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto"
  return (
    <div className="flex flex-col gap-4">
        {/* client message  */}
        <div className={`${basicStyle}`}>
            <pre>
                <span>
                    Hy chat Gpt, can you help me?
                </span>
            </pre>
        </div>
        {/* ai message */}
        <div className={`${basicStyle} ${aiStyle}`}>
            <pre>
                <span>Yeah, I can help you with anything</span>
            </pre>
        </div>
    </div>
  )
}

export default ChatBody