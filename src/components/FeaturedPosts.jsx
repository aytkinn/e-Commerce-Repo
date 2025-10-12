import React from 'react';
import { Clock, MessageCircle, ChevronRight } from 'lucide-react';
import { featuredPostsData } from '../data/products';

const FeaturedPosts = () => {

  return (
    <div className="w-full max-w-7xl mx-auto bg-white py-16">

      <div className="text-center mb-12">
        <p className="text-sm font-medium text-[#23A6F0] mb-2">Practice Advice</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">Featured Posts</h2>
        <p className="text-sm text-[#737373] max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>


      <div className="flex flex-col md:flex-row gap-6">
        {featuredPostsData.map((post) => (
          <div key={post.id} className="bg-white border-50 border-white  overflow-hidden shadow-sm mb-8 mt-8 w-full md:w-1/3">

            <div className="relative">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white h-4 w-10 text-xs font-semibold ">
                NEW
              </div>
            </div>

     
            <div className="p-6">

               <div className="flex flex-wrap gap-2 mb-2 mt-8">
                 {post.tags.map((tag, index) => (
                   <a key={index} href="#" className="text-xs text-gray-400 font-lg hover:text-[#23A6F0] transition-colors">
                     {tag}
                   </a>
                 ))}
               </div>

              <h3 className="text-2xl font-medium text-[#252B42] text-left mb-3">
                {post.title}
              </h3>

              <p className="text-sm text-[#737373] text-left mb-4">
                {post.description}
              </p>

              <div className="flex items-center justify-between text-xs text-[#737373] mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-[#23A6F0]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4 text-[#23A6F0]" />
                  <span>{post.comments}</span>
                </div>
              </div>
              <a href="#" className="text-[#737373] text-sm font-bold flex items-center gap-1 hover:text-[#23A6F0] transition-colors">
                Learn More
                <ChevronRight className="h-6 w-6 text-[#23A6F0] " />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
