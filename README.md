# trop
Translate Operational Codes, a spicy text to HTML converter with UNIX line command-like syntax support.

## Installation

```sh

  npm i -g trop

```

## Usage

```sh

trop poem.txt

```

### Example #0 (commands)

```HTML
<html>

  <head>

    <meta>

  </head>

<body>


  $ youtube --id sR2v0Pfmzzc --images test/image --title "Hello" something
    $youtube -x --id sR2v0Pfmzzc --title "This is a description with \"text\"..."



</body>
</html>

```

Output

```html

<html>

  <head>

    <meta>

  </head>

<body>


  <img title="Hello" src="test/image/yid-sR2v0Pfmzzc.jpg">

  <img title="This is a description with &quot;text&quot;..." src="dist/image/yid-sR2v0Pfmzzc.jpg">



</body>
</html>


```

The command is parsed into standard object format as follows:

```JavaScript

// first command
youtube { _: [ 'something' ], id: 'BEEFFC00FFEE' }

// second command
youtube {
  _: [],
  x: true,
  id: 'C00FFEE',
  name: 'This is a description with "text"...'
}

```


### Example #1 (messy HTML)

```html

<html>

  <head>

    <meta>

  </head>

<body>


  Kosmos
  By Walt Whitman

  ---

  Who includes diversity and is Nature,
  Who is the amplitude of the earth, and the coarseness and sexuality of the earth, and the great charity of the earth and the equilibrium also,
  Who has not look’d forth from the windows the eyes for nothing, or whose brain held audience with messengers for nothing,

  Who contains believers and disbelievers, who is the most majestic lover,
  Who holds duly his or her triune proportion of realism, spiritualism, and of the æsthetic or intellectual,
  Who having consider’d the body finds all its organs and parts good,

  Who, out of the theory of the earth and of his or her body understands by subtle analogies all other theories,
  The theory of a city, a poem, and of the large politics of these States;

  Who believes not only in our globe with its sun and moon, but in other globes with their suns and moons,

  ---

  Who, constructing the house of himself or herself, not for a day but for all time, sees races, eras, dates, generations,
  The past, the future, dwelling there, like space, inseparable together.

</body>
</html>


```
Output:

```html

<html>

  <head>

    <meta>

  </head>

  <body>


    <section>
      <p>Kosmos</p>
      <p>By Walt Whitman</p>
    </section>

    <section>
      <hr>
    </section>

    <section>
      <p>Who includes diversity and is Nature,</p>
      <p>Who is the amplitude of the earth, and the coarseness and sexuality of the earth, and the great charity of the earth and the equilibrium also,</p>
      <p>Who has not look’d forth from the windows the eyes for nothing, or whose brain held audience with messengers for nothing,</p>
    </section>

    <section>
      <p>Who contains believers and disbelievers, who is the most majestic lover,</p>
      <p>Who holds duly his or her triune proportion of realism, spiritualism, and of the æsthetic or intellectual,</p>
      <p>Who having consider’d the body finds all its organs and parts good,</p>
    </section>

    <section>
      <p>Who, out of the theory of the earth and of his or her body understands by subtle analogies all other theories,</p>
      <p>The theory of a city, a poem, and of the large politics of these States;</p>
    </section>

    <section>
      <p>Who believes not only in our globe with its sun and moon, but in other globes with their suns and moons,</p>
    </section>

    <section>
      <hr>
    </section>

    <section>
      <p>Who, constructing the house of himself or herself, not for a day but for all time, sees races, eras, dates, generations,</p>
      <p>The past, the future, dwelling there, like space, inseparable together.</p>
    </section>

  </body>

</html>


```

### Example #2 (plain text)

```html

Kosmos
By Walt Whitman

---

Who includes diversity and is Nature,
Who is the amplitude of the earth, and the coarseness and sexuality of the earth, and the great charity of the earth and the equilibrium also,
Who has not look’d forth from the windows the eyes for nothing, or whose brain held audience with messengers for nothing,

Who contains believers and disbelievers, who is the most majestic lover,
Who holds duly his or her triune proportion of realism, spiritualism, and of the æsthetic or intellectual,
Who having consider’d the body finds all its organs and parts good,

Who, out of the theory of the earth and of his or her body understands by subtle analogies all other theories,
The theory of a city, a poem, and of the large politics of these States;

Who believes not only in our globe with its sun and moon, but in other globes with their suns and moons,

---

Who, constructing the house of himself or herself, not for a day but for all time, sees races, eras, dates, generations,
The past, the future, dwelling there, like space, inseparable together.

```

Output

```html

<section>
  <p>Kosmos</p>
  <p>By Walt Whitman</p>
</section>

<section>
  <hr>
</section>

<section>
  <p>Who includes diversity and is Nature,</p>
  <p>Who is the amplitude of the earth, and the coarseness and sexuality of the earth, and the great charity of the earth and the equilibrium also,</p>
  <p>Who has not look’d forth from the windows the eyes for nothing, or whose brain held audience with messengers for nothing,</p>
</section>

<section>
  <p>Who contains believers and disbelievers, who is the most majestic lover,</p>
  <p>Who holds duly his or her triune proportion of realism, spiritualism, and of the æsthetic or intellectual,</p>
  <p>Who having consider’d the body finds all its organs and parts good,</p>
</section>

<section>
  <p>Who, out of the theory of the earth and of his or her body understands by subtle analogies all other theories,</p>
  <p>The theory of a city, a poem, and of the large politics of these States;</p>
</section>

<section>
  <p>Who believes not only in our globe with its sun and moon, but in other globes with their suns and moons,</p>
</section>

<section>
  <hr>
</section>

<section>
  <p>Who, constructing the house of himself or herself, not for a day but for all time, sees races, eras, dates, generations,</p>
  <p>The past, the future, dwelling there, like space, inseparable together.</p>
</section>

```
