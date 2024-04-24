export interface Podcast {
  'im:name': IMName
  'im:image': IMImage[]
  summary: IMName
  'im:price': IMPrice
  'im:contentType': IMContentType
  rights: IMName
  title: IMName
  link: Link
  id: ID
  'im:artist': IMArtist
  category: Category
  'im:releaseDate': IMReleaseDate
}

export interface Category {
  attributes: CategoryAttributes
}

export interface CategoryAttributes {
  'im:id': string
  term: string
  scheme: string
  label: string
}

export interface ID {
  label: string
  attributes: IDAttributes
}

export interface IDAttributes {
  'im:id': string
}

export interface IMArtist {
  label: string
  attributes: IMArtistAttributes
}

export interface IMArtistAttributes {
  href: string
}

export interface IMContentType {
  attributes: IMContentTypeAttributes
}

export interface IMContentTypeAttributes {
  term: string
  label: string
}

export interface IMImage {
  label: string
  attributes: IMImageAttributes
}

export interface IMImageAttributes {
  height: string
}

export interface IMName {
  label: string
}

export interface IMPrice {
  label: string
  attributes: IMPriceAttributes
}

export interface IMPriceAttributes {
  amount: string
  currency: string
}

export interface IMReleaseDate {
  label: Date
  attributes: IMName
}

export interface Link {
  attributes: LinkAttributes
}

export interface LinkAttributes {
  rel: string
  type: string
  href: string
}

export interface Episode {
  episodeUrl: string
  releaseDate: string
  previewUrl: string
  artworkUrl160: string
  episodeFileExtension: string
  episodeContentType: string
  trackId: number
  trackName: string
  collectionId: number
  collectionName: string
  feedUrl: string
  shortDescription: string
  closedCaptioning: string
  genres: Genre[]
  episodeGuid: string
  description: string
  artworkUrl600: string
  collectionViewUrl: string
  trackViewUrl: string
  artworkUrl60: string
  trackTimeMillis: number
  contentAdvisoryRating: string
  country: string
  kind: string
  wrapperType: string
}

export interface Genre {
  name: string
  id: string
}
