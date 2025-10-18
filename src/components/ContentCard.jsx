export default function ContentCard({ content }) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className={`${content.color} h-32 flex items-center justify-center`}>
                <i className={`${content.icon} text-white text-5xl`}></i>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-accent bg-light-blue px-3 py-1 rounded-full">
                        {content.level}
                    </span>
                    <span className="text-xs text-muted-gray flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        {content.duration}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{content.title}</h3>
                <p className="text-sm text-text-gray mb-4 line-clamp-2">{content.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-gray flex items-center">
                        <i className="ri-file-list-3-line mr-1"></i>
                        {content.materials} Materi
                    </span>
                    <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors text-sm flex items-center space-x-1">
                        <span>Mulai</span>
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
