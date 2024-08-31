This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

update libs
```bash
npm install
```
run dev server [http://localhost:3000]
```bash
yarn dev
```

### Add ebup
0. смотрим пример: https://github.com/futurepress/epubjs-reader/blob/master/package.json
1. run -> "yarn"
2. run -> "yarn add epubjs jszip"


### Add leaflet
1. install libs
- "npm install leaflet react-leaflet"
- "npm install -D @types/leaflet"
- "npm install leaflet-defaulticon-compatibility"
2. add file "app/components/LeafletMap.tsx"
3. add file "app/map/page.tsx"
4. run -> "yarn dev"
5. go to -> "http://localhost:3000/map"


### To do
- add "[dexie.js](https://dexie.org/)"
- add "[peer.js](https://peerjs.com/)"
- add p2p sync time algoritm 
- add protocol description of communication
-
-

