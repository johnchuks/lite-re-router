import { formatQuery, pickQuery, getParams } from '../util';


describe('util', () => {
  it('should format a string of query into an object', () => {
    const query = formatQuery('?q=Jason%20Mraz&band=Of%20Monsters%20And%20Men')
    expect(query).toEqual({
      q: 'Jason Mraz',
      band: 'Of Monsters And Men'
    })
  });

  it('should pick out query string from full path', () => {
    const query = pickQuery('https://boku.no/hero/academia/?name=Izuku%20Midoriya&quirk=Unknown');// I know his quirk
    expect(query).toEqual({
      name: 'Izuku Midoriya',
      "quirk": "Unknown"
    });
  });

  it('should generate param object and real url', () => {
    const { params, trueRoute } = getParams(
      '/customer/:id/name/:name',
      '/customer/C3PO/name/Daisy Ridley'
    );
    expect(params).toEqual({ id: 'C3PO', name: 'Daisy Ridley' });
    expect(trueRoute).toEqual('/customer/C3PO/name/Daisy Ridley');
  });
});
