'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  Link2, 
  Share2,
  Check,
  X
} from 'lucide-react'

interface FloatingSocialShareProps {
  url: string
  title: string
  description?: string
}

export default function FloatingSocialShare({ url, title, description }: FloatingSocialShareProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewHeight = window.innerHeight
      
      // Show after scrolling 20% of viewport height
      setIsVisible(scrolled > viewHeight * 0.2)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description || title)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleShare = (platform: string) => {
    window.open(shareLinks[platform as keyof typeof shareLinks], '_blank', 'width=600,height=400')
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className={`bg-background border border-border rounded-lg shadow-lg transition-all duration-300 ${
        isExpanded ? 'w-48 p-4' : 'w-12 h-12'
      }`}>
        {!isExpanded ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className="w-full h-full p-0 hover:bg-primary/10"
          >
            <Share2 className="w-5 h-5" />
          </Button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Share</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="w-6 h-6 p-0"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare('twitter')}
                className="w-full justify-start gap-2 hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare('facebook')}
                className="w-full justify-start gap-2 hover:bg-[#4267B2]/10 hover:text-[#4267B2]"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="w-full justify-start gap-2 hover:bg-[#0077B5]/10 hover:text-[#0077B5]"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="w-full justify-start gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-4 h-4" />
                    Copy Link
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
