import { Camera, Images } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import { galleryImages } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

export default function GalleryPage() {
  usePageMeta(
    'Gallery | MFM Teenage Church',
    'Photo gallery of MFM Teenage Church, North Central Region 7, Gwagwalada Abuja — memories from services, programmes and fellowship.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Moments Worth <span className="text-gradient-fire">Remembering</span></>}
        description="A visual journal of our worship, fellowship and victories — photos coming soon."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site">
          <div className="mb-10 rounded-3xl border border-dashed border-white/15 bg-ink-900/50 p-10 text-center md:p-14">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-fire-500/20 bg-fire-500/10">
              <Images className="h-8 w-8 text-fire-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">Memories coming soon…</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
              Photos from our services, programmes, outings and ministration moments will be
              showcased here. This space is being prepared for the official gallery.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img) => (
              <ImagePlaceholder key={img.id} label={img.title} icon="camera" aspect="square" />
            ))}
          </div>

          <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
            <Camera className="h-4 w-4 text-fire-500" />
            Follow our social media for real-time updates and behind-the-scenes moments.
          </p>
        </div>
      </section>
    </>
  )
}