import { attr, comment, el, tableFrom } from '../html'
import { _HtmlDocument } from './_HtmlDocument'

describe(_HtmlDocument.name, () => {
  it('should render html correctly', () => {
    const doc = _HtmlDocument.simple({
      title: 'index',
      head: [el.style('.row { margin-top: 10px } .col { margin: 20px }')],
      body: [
        comment('First row'),
        el.div(
          attr.class('row'),
          el.div(
            attr.class('col'),
            el.h3('Table'),
            tableFrom([
              ['A', 'B', 'C'],
              ['Abe', 'Ben', 'Citron'],
              ['Ananas', 'Bongo', 'Cirkus'],
            ]),
            el.div(attr.class('col'), el.h3('Text'), el.p('This is a paragraph.')),
          ),
        ),
        comment('Second row'),
        el.div(
          attr.class('row'),
          el.div(
            attr.class('col'),
            el.h3('List'),
            el.ul(['one', 'two', 'three', 'four'].map((item) => el.li(attr.contenteditable(true), item))),
          ),
          el.div(
            attr.class('col'),
            el.h3('Button'),
            el.button([attr.class('btn btn-primary'), attr.onclick('doit()')], 'Click me!'),
          ),
        ),
      ],
      scripts: [
        el.script(`function doit() { console.log('did it'); }`),
        //
      ],
    })

    expect(doc.toString()).toBe(
      `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>index</title><!-- Bootstrap CSS --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" /><!-- Custom CSS --><style>body { margin: 50px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; }</style><style>.row { margin-top: 10px } .col { margin: 20px }</style></head><body><!-- Content --><div id="root" class="container"><!-- First row --><div class="row"><div class="col"><h3>Table</h3><table class="table table-striped table-hover table-sm"><thead><tr><th>A</th><th>B</th><th>C</th></tr></thead><tbody><tr><td>Abe</td><td>Ben</td><td>Citron</td></tr><tr><td>Ananas</td><td>Bongo</td><td>Cirkus</td></tr></tbody></table><div class="col"><h3>Text</h3><p>This is a paragraph.</p></div></div></div><!-- Second row --><div class="row"><div class="col"><h3>List</h3><ul><li contenteditable>one</li><li contenteditable>two</li><li contenteditable>three</li><li contenteditable>four</li></ul></div><div class="col"><h3>Button</h3><button class="btn btn-primary" onclick="doit()">Click me!</button></div></div></div><!-- Bootstrap JS --><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script><!-- Custom JS --><script>function doit() { console.log('did it'); }</script></body></html>`,
    )
  })
})
