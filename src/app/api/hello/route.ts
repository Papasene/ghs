export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}
/* 
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` }
  });
}
La revalidation statique de données sur Next.js 13 est une fonctionnalité de cette version de la plateforme qui permet de rafraîchir les données statiques d'une page à intervalles réguliers, sans avoir à recharger la page 
ou à la regénérer à partir de zéro. Cette fonctionnalité est utile pour les sites web qui ont des données qui changent fréquemment, mais qui ne nécessitent pas une mise à jour en temps réel.

Plus précisément, la revalidation statique de données sur Next.js 13 permet de spécifier un intervalle de temps après lequel les données d'une page seront automatiquement rafraîchies. Si un utilisateur accède à cette page '
avant que l'intervalle ne soit écoulé, il recevra la version mise en cache de la page avec les données statiques existantes. Si l'utilisateur accède à la page après l'expiration de l'intervalle, Next.js rafraîchira automatiquement les données statiques et renverra une nouvelle version de la page. */
/* 
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
}
 */

/* les headers permettent de personnaliser les entetes http 
headers de Securite 
headers de cache 
headers d authentification */

// redirection

//Streaming
/* 
Concrètement, le streaming permet d'améliorer la vitesse de chargement des pages en permettant aux utilisateurs de voir le contenu de la page 
plus rapidement. En effet, plutôt que d'attendre que tout le contenu de la page soit généré sur le serveur, le serveur commence à diffuser la 
page au client dès que le contenu est disponible, ce qui permet une expérience utilisateur plus fluide.

Le streaming peut être activé en utilisant la méthode renderToStream de Next.js. Cette méthode permet de générer une version streamée de la 
page en cours de rendu et de la transmettre au client au fur et à mesure qu'elle est générée. */

/*
Dans Next.js, le "request body" (corps de requête en français) fait référence aux données envoyées avec une requête HTTP POST ou PUT à un serveur. 
Ces données sont généralement envoyées sous forme de JSON, de données de formulaire ou de fichiers.

Le request body est utilisé pour transmettre des données depuis le client au serveur. Il peut contenir des informations telles que des noms 
d'utilisateur, des adresses e-mail, des messages ou des images, et peut être utilisé pour créer, mettre à jour ou supprimer des ressources sur le serveur.
*/

/*
Les "CORS headers" (Cross-Origin Resource Sharing headers) sont utilisés pour contrôler les accès aux ressources d'un serveur web depuis un domaine 
différent. En d'autres termes, ils permettent de spécifier les domaines qui ont le droit d'accéder aux ressources de votre serveur web.
*/

/*
Les routes parallèles vous permettent de rendre simultanément une ou plusieurs pages dans la même vue qui peuvent être parcourues indépendamment. 
Pour les sections hautement dynamiques d'une application, telles que les tableaux de bord et les flux sur les sites sociaux, les routes parallèles 
peuvent être utilisées pour mettre en œuvre des modèles de routage complexes.
*/

/* Convention @dossier, @audience , @views : definition des slots

dashboard
├── @audience
│   ├── demographics
│   │   └── page.js
│   ├── subscribers
│   │   └── page.js
│   └── page.js
├── @views
│   ├── impressions
│   │   └── page.js
│   ├── view-duration
│   │   └── page.js
│   └── page.js
├── layout.js
└── page.js

*/

/*

Le composant Layout (/dashboard/layout.js)accepte les slots @audienceet @viewscomme props, et peut les afficher en parallèle avec la childrenprop :

function AudienceNav() {
  return <nav>...</nav>;
}

function ViewsNav() {
  return <nav>...</nav>;
}

export default function Layout({ children, audience, views }) {
  return (
    <>
      <h1>Tab Bar Layout</h1>
      {children}

      <h2>Audience</h2>
      <AudienceNav />
      {audience}

      <h2>Views</h2>
      <ViewsNav />
      {views}
    </>
  );
}

*/

/*
le navigateur affichera l'emplacement qui correspond à l'URL actuelle mais ne peut pas savoir quel autre emplacement parallèle était actif.

Vous pouvez définir un default.jsfichier à afficher comme solution de secours lorsque le navigateur ne peut pas restaurer l'état précédent.

dashboard
├── @team
│   └── ...
├── @user
│   └── ...
├── default.js
├── layout.js
└── page.js
*/

/*

Routes conditionnelles
Les routes parallèles peuvent être utilisées pour implémenter le routage conditionnel. Par exemple, vous pouvez rendre un @useret @teamune route en fonction du type d'utilisateur actuel :

// app/dashboard/layout.js

export default async function Layout({ children, user, team }) {
  const userType: 'user' | 'team' = getCurrentUserType();

  return (
    <>
      {userType === 'user' ? user : team}
      {children}
    </>
  );
}
*/

/*
@2eme methode pour mettre en oeuvre les routes paralleeles 
C est d aller au niveau du fichier layout.tsx, passer en props
les pages qu on veut charger parallelement 

*/

// Default.js

/*
un "middleware" est une fonction qui intercepte les requêtes HTTP entrantes avant qu'elles ne soient transmises au routeur de la page. 
Les middlewares sont exécutés avant que les fonctions getServerSideProps ou getStaticProps ne soient appelées, ce qui signifie que vous 
pouvez utiliser les middlewares pour effectuer des actions qui doivent être exécutées sur chaque requête, comme la gestion des cookies, 
la vérification des autorisations ou la mise en cache des réponses.
*/

/*
Le concept d'interception de routes dans Next.js est de permettre aux développeurs de gérer de manière dynamique les routes avant qu'une
 page ne soit rendue. L'interception de route permet de définir des actions spécifiques à exécuter avant que la page ne soit chargée, comme par exemple :

Rediriger l'utilisateur vers une autre page
Vérifier si l'utilisateur est connecté avant de lui permettre d'accéder à une page spécifique
Modifier le comportement par défaut de la navigation de l'utilisateur
Effectuer des opérations spécifiques avant de charger la page

2eme utilisation

L'interception des itinéraires vous permet de charger un nouvel itinéraire dans la mise en page actuelle tout en masquant l'URL du navigateur, 
ce qui est utile lorsque le maintien du contexte de la page actuelle est important. Par exemple, voir toutes les tâches lors de la modification
d'une tâche, ouvrir un panier dans un modal latéral ou développer une photo dans un flux.


Convention
Les routes d'interception peuvent être définies avec la (..)convention, similaire aux chemins relatifs ../. Vous pouvez également 
utiliser la (...)convention pour créer un chemin relatif au apprépertoire.

[feed]
├── (..)photo/[id]
│   └── page.tsx
└── layout.tsx
photo/[id]
├── page.tsx
└── layout.tsx


Lors de la création d'un modal, vous devez souvent être conscient de certains défis courants, tels que :

Les modaux n'étant pas accessibles via une URL.
Les modaux se ferment lorsque la page est rafraichie.
Navigation vers l'arrière allant à l'itinéraire précédent plutôt qu'à l'itinéraire derrière le modal.
La navigation vers l'avant ne rouvre pas le modal.
L'interception d'un itinéraire résout les problèmes que vous pouvez rencontrer lors de la création de modaux, tels que rendre le contenu modal 
partageable via une URL, empêcher la perte de contexte lorsque la page est actualisée, et fermer et rouvrir le modal avec une navigation vers 
l'arrière et vers l'avant.

shop
├── @products
│   └── page.tsx
├── @modal/(..)cart
│   └── page.tsx
└── layout.tsx

*/
